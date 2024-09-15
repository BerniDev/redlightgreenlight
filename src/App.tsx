import { HomePage } from "./pages/home.page";
import { HashRouter, Route, Routes } from "react-router-dom";
import { AppRoutes } from "./routes";
import { Layout } from "./components/layout";
import { Game } from "./pages/game.page";
import { Ranking } from "./pages/ranking.page";
import { GameProvider } from "./context/game.context";
import "./App.css";

function App() {
  return (
    <GameProvider>
      <HashRouter>
        <Routes>
          <Route path={AppRoutes.Home} element={<HomePage />}></Route>
          <Route element={<Layout />}>
            <Route path={AppRoutes.Game} element={<Game />} />
            <Route path={AppRoutes.Ranking} element={<Ranking />} />
          </Route>
        </Routes>
      </HashRouter>
    </GameProvider>
  );
}

export default App;
