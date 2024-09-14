import { createContext, useCallback, useEffect, useMemo, useState } from "react";
import { IProvider } from "../models/core";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { PlayerInfo, Ranking } from "../models/game";

export interface IGameContext {
  playerName: string;
  maxScore: number;
  ranking: Ranking;
  setMaxScore: (newScore: number) => void;
  setPlayer: (newUser: string) => void;
  setRanking: (newRanking: Ranking) => void;
  emptyLocalStorage: () => void;
}

export const GameContext = createContext({} as IGameContext);

const GameProvider = ({ children }: IProvider) => {
  const [playerName, setPlayerName, removePlayerName] = useLocalStorage(
    "player",
    ""
  );
  const [maxScore, setMaxScore] = useState(0);
  const [ranking, setRanking, removeRanking] = useLocalStorage<Ranking>(
    "ranking",
    []
  );

  useEffect(() => {
    const rankedPlayer = ranking.find(
      (player: PlayerInfo) => player.name === playerName
    );
    if (rankedPlayer) setMaxScore(rankedPlayer.score);
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
      setMaxScore(newScore);
      if (isRankedPlayer) {
        const updatedRanking = ranking.map((player) =>
          player.name === playerName ? { ...player, score: newScore } : player
        );
        setRanking(updatedRanking);
      } else {
        setRanking([...ranking, { name: playerName, score: newScore }]);
      }
    },
    [playerName, ranking, setRanking, setMaxScore]
  );

  const emptyLocalStorage = useCallback(() => {
    removePlayerName();
    removeRanking();
  }, [removePlayerName, removeRanking]);

  const contextValue = useMemo(
    () => ({
      playerName,
      maxScore,
      ranking,
      setMaxScore: updateRankingWithMaxScore,
      setPlayer,
      setRanking,
      emptyLocalStorage,
    }),
    [
      playerName,
      maxScore,
      ranking,
      updateRankingWithMaxScore,
      setPlayer,
      setRanking,
      emptyLocalStorage,
    ]
  );

  return (
    <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>
  );
};

export { GameProvider };
