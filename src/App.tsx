import { HomePage } from "./pages/home.page";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppRoutes } from "./routes";
import { Layout } from "./components/Layout";
import { Game } from "./pages/game.page";
import { Ranking } from "./pages/ranking.page";
import { GameProvider } from "./context/game.context";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0)

  // const swStart = async () => {
  //   const wb = new Workbox('/sw.js');
  //   wb.register();
  //   console.log("WB ACTIVE , true?->", wb.active);

  //   const swVersion = await wb.messageSW({type: 'GET_VERSION'});
  //   console.log('Service Worker version:', swVersion);
  // }

  // useEffect(()=> {
  //   swStart();
  // },[])

  return (
    <GameProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoutes.Home} element={<HomePage />}></Route>
          <Route element={<Layout />}>
            <Route path={AppRoutes.Game} element={<Game />} />
            <Route path={AppRoutes.Ranking} element={<Ranking />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GameProvider>
  );
}

export default App;
