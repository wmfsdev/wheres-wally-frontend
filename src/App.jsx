
import './App.css'
import { Link, Outlet } from "react-router-dom"

function App() {

  return (
    <>
    <nav>
    <h1>PICK A BOARD</h1>
    <ol className="board-list">
      <li>
        <Link to='/board/maze'>
          <img src="/src/assets/wally_maze_thumb.jpeg" alt="" />
        </Link>
      </li>
      <li>
        <Link to='/board/football'>
          <img src="/src/assets/wally_football_thumb.jpeg" alt="" />
        </Link>
      </li>
      <li>
        <Link to='/board/fishing'>
          <img src="/src/assets/wally_fishing_thumb.jpeg" alt="" />
        </Link>
      </li>
    </ol>
    </nav>
    <Outlet />
    </>
    )
}

export default App