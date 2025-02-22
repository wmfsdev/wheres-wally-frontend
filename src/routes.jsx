
import App from "./App";
import { Results } from "./components/Results";
import { gameResultsLoader } from "./util/loader";
import Board from "./components/Board";

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { 
        path: '/board/:id',
        element: <Board />
      }
    ]
  },
  {
    path: '/results',
    element: <Results />,
    loader: gameResultsLoader
  }
]

export default routes