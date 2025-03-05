
import './App.css'
import { Link, Outlet } from "react-router-dom"
import { useState } from 'react'
import Characters from './components/Characters'
import { useParams } from 'react-router-dom'

function App() {

  const { id } = useParams()
  const [ param, setParam ] = useState(id)
  const [ hidden, setHidden ] = useState(true)
  const [ boardState, setBoardState ] = useState(false)
  const [ characters, setCharacters ] = useState([])

  const [ submitState, setSubmitState ] = useState(null)

  const list = <ol className="board-list">
  <li>
    <Link to='/board/maze'>
      <img src="/wally_maze_thumb.jpeg" alt="" />
    </Link>
  </li>
  <li>
    <Link to='/board/football'>
      <img src="/wally_football_thumb.jpeg" alt="" />
    </Link>
  </li>
  <li>
    <Link to='/board/rome'>
      <img src="/wally_rome_thumb.jpeg" alt="" />
    </Link>
  </li>
  
  </ol>

  return (
    <>
    <div className='nav-wrapper'>
      <nav
        onMouseEnter={() => setHidden(false)}
        onMouseLeave={() => setHidden(true)}   
        className='board-nav'>
        <h2><Link to={'/results'}>WHO IS THE FASTEST?</Link></h2>
        <h2>PICK A BOARD</h2>
        { hidden ? null : list } 
      </nav>
      { boardState ? 
        <div className='character-nav'>
          <h2>FIND THESE CHARACTERS:</h2>
          <Characters charArray={characters} param={param} submitState={submitState}/>
        </div>
        : null }
    </div>
    <Outlet context={[setBoardState, characters, setCharacters, param, setParam, submitState, setSubmitState ]}/>
    </>
    )
}

export default App