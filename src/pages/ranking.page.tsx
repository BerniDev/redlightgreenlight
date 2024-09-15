import { useContext, useId } from "react";
import { GameContext } from "../context/game.context";
import { PlayerInfo } from "../models/game";

function Ranking() {
  const { ranking } = useContext(GameContext);
  const id = useId();

  return (
    <div className="ranking-page">
      <h1 className="title">Ranking</h1>
      <div className="list-container">
        <table>
          <thead>
            <tr>
              <th>Position</th>
              <th>Name</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {ranking.map((playerInfo: PlayerInfo, index) => (
              <tr key={`${id}-${index}`}>
                <td>{index + 1}</td>
                <td>{playerInfo.name}</td>
                <td>{playerInfo.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export { Ranking };
