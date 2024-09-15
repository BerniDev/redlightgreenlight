import { useCallback, useContext, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { GameContext } from "../context/game.context";
import { AppRoutes } from "../routes";
import { TopNavBar } from "./topNavBar";

function Layout() {
  const { playerName, setPlayer } = useContext(GameContext);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (!playerName) navigate(AppRoutes.Home);
  }, [playerName, navigate]);

  const resetPlayerAndExitGame = () => {
    setPlayer("");
    navigate(AppRoutes.Home);
  };

  const navigateToGameOrRankingPage = () => {
    if (pathname === AppRoutes.Game) return navigate(AppRoutes.Ranking);
    if (pathname === AppRoutes.Ranking) return navigate(AppRoutes.Game);
  };

  const getButtonText = useCallback((): string => {
    if (pathname === AppRoutes.Game) return "Ranking";
    if (pathname === AppRoutes.Ranking) return "Game";
    return "";
  }, [pathname]);

  return (
    <div className="layout">
      <TopNavBar
        playerName={playerName}
        onExit={resetPlayerAndExitGame}
        midButtonText={getButtonText()}
        onClick={navigateToGameOrRankingPage}
      />
      <div className="layout-container">
        <Outlet />
      </div>
    </div>
  );
}

export { Layout };
