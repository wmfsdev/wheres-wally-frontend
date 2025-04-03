
import App from "./App";
import { Results } from "./components/Results";
import { gameResultsLoader } from "./util/loader";
import Board from "./components/Board";
import Error from "./components/Error";

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
  },
  {
    path: '/error',
    element: <Error />,
  }
]

export default routes