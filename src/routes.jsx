import App from "./App";
import { Results } from "./components/Results";
import { gameResultsLoader } from "./util/loader";

const routes = [
  {
    path: '/',
    element: <App />
  },
  {
    path: '/results',
    element: <Results />,
    loader: gameResultsLoader
  }
]

export default routes