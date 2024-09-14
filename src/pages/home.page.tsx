import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GameContext } from "../context/game.context";
import { AppRoutes } from "../routes";

function HomePage() {
  const { playerName, setPlayer } = useContext(GameContext);
  const navigate = useNavigate();

  const handleJoin = () => {
    if (playerName) {
      navigate(AppRoutes.Game);
    }
  };

  return (
    <div className="home-page">
      <h1>HOME</h1>
      <h3>Create new player</h3>
      <label>Name</label>
      <input value={playerName} onChange={(e) => setPlayer(e.target.value)} />
      <button onClick={handleJoin} disabled={!playerName}>
        Join
      </button>
    </div>
  );
}
export { HomePage };
