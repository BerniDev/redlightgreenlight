import { createContext, useCallback, useEffect, useMemo, useState } from "react";
import { IProvider } from "../models/core";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { PlayerInfo, Ranking } from "../models/game";

export interface IGameContext {
  playerName: string;
  maxScore: number;
  ranking: Ranking;
  setMaxScore: (newScore: number) => void;
  addPlayerToRanking: (newPlayerName: string) => void;
  setPlayer: (newUser: string) => void;
  setRanking: (newRanking: Ranking) => void;
}

export const GameContext = createContext({} as IGameContext);

const GameProvider = ({ children }: IProvider) => {
  const [playerName, setPlayerName] = useLocalStorage(
    "player",
    ""
  );
  const [maxScore, setMaxScore] = useState(0);
  const [ranking, setRanking] = useLocalStorage<Ranking>(
    "ranking",
    []
  );

  useEffect(() => {
    const rankedPlayer = ranking.find(
      (player: PlayerInfo) => player.name === playerName
    );
    if (rankedPlayer) setMaxScore(rankedPlayer.score);
    else setMaxScore(0);
  }, [playerName, ranking, setMaxScore]);

  const setPlayer = useCallback(
    (newUser: string) => {
      setPlayerName(newUser);
    },
    [setPlayerName]
  );

  const updateRankingWithMaxScore = useCallback(
    (newScore: number) => {
      const isRankedPlayer = ranking.some(
        (player: PlayerInfo) => player.name === playerName
      );
      if (isRankedPlayer) {
        const updatedRanking = ranking.map((player) =>
          player.name === playerName ? { ...player, score: newScore } : player
        );
        const orderedRanking = updatedRanking.sort((a, b) => b.score - a.score);
        setRanking(orderedRanking);
        setMaxScore(newScore);
      } else {
        const newOrderedRanking = [
          ...ranking,
          { name: playerName, score: newScore },
        ].sort((a, b) => b.score - a.score);
        setRanking(newOrderedRanking);
      }
    },
    [playerName, ranking, setRanking, setMaxScore]
  );

  const addPlayerToRanking = (newPlayerName: string) => {
    const isRankedPlayer = ranking.some(
      (player: PlayerInfo) => player.name === playerName
    );
    if(!isRankedPlayer){
      const newOrderedRanking = [
        ...ranking,
        { name: newPlayerName, score: 0 },
      ].sort((a, b) => b.score - a.score);
      setRanking(newOrderedRanking);
    }
  }

  const contextValue = useMemo(
    () => ({
      playerName,
      maxScore,
      ranking,
      setMaxScore: updateRankingWithMaxScore,
      addPlayerToRanking,
      setPlayer,
      setRanking,
      }),
    [
      playerName,
      maxScore,
      ranking,
      updateRankingWithMaxScore,
      addPlayerToRanking,
      setPlayer,
      setRanking,
      ]
  );

  return (
    <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>
  );
};

export { GameProvider };
