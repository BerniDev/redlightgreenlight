import { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { GameContext } from "../context/game.context";
import { AppRoutes } from "../routes";
import { TopNavBar } from "./TopNavBar";

function Layout() {
  const { playerName, setPlayer } = useContext(GameContext);
  const navigate = useNavigate();

  useEffect(()=>{
    if(!playerName) navigate(AppRoutes.Home);
  },[playerName, navigate]);

  const handleLogOut = () => {
    setPlayer('');
    navigate(AppRoutes.Home);
  };

  return (
    <div className="layout">
      <TopNavBar playerName={playerName} onExit={handleLogOut} />
      <div className="layout-container">
        <Outlet />
      </div>
    </div>
  );
}

export { Layout };
