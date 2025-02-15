
import './App.css'
import { useRef, useState, useEffect } from 'react'
import { Dropdown } from './components/Dropdown'
import { useNavigate } from 'react-router'

function App() {
  
  useEffect(() => {
    async function fetchData() {
      console.log("fetching")
      await fetch('http://localhost:3000/game/board', {
        credentials: 'include'
      })
    }
    fetchData()
  }, [])

  const navigate = useNavigate()
  const imageRef = useRef(null)
  let imageClickEvent = useRef(null)

  const [ submitState, setSubmitState ] = useState(null)

  const [ clickState, setClickState ] = useState(false)
  const [ characters, setCharacters ] = useState([])

  const handleImageClick = (e) => {
    console.log("being clicked")
    if (!clickState) {
      setClickState(true)
      imageClickEvent.current = e 
    } else {
      setClickState(false)
    }
  }

  const options = characters.map(function(option, index) { 
    return <div className='character' key={index}>{option.name}</div>
  })
  async function submitPlayerName(e) {
    e.preventDefault()
    console.log("submitting")
    const form = e.target
    const formData = new FormData(form)
    const playerId = formData.get('playerId')
    const playerName = formData.get('playerName')
 
    try {
      const response = await fetch('http://localhost:3000/game/player', {
          method: 'PUT',
          headers: { 'Content-type': 'application/json; charset=UTF-8',
          },
          body: JSON.stringify({
             playerId: playerId,
             playerName: playerName,
          })
      })
      const data = await response.json()
      navigate('/results')
    } catch (err) {
      console.log(err)
    }
 }

  return (
    <>
      <Dropdown 
        submit={(state) => setSubmitState(state)}
        characters={(character) => setCharacters([
          ...characters,
          character
        ])} 
        handleOption={() => setClickState(false)} 
        isClicked={clickState} 
        image={imageRef} 
        imageEvent={imageClickEvent}/>
      <div className="wally-border">
        <img ref={imageRef} onClick={(e) => handleImageClick(e)} src="/src/assets/r_wally.jpg" alt="wheres wally" />
      </div>
      <div className='characters'>
        <h2>You have found these characters:</h2>
        {options}
        { submitState ?
        <>
          <form action="PUT" onSubmit={submitPlayerName}>
            <input type="text" name="playerId" value={submitState} readOnly={true}/>
            <input type="text" name="playerName" />
            <button type="submit">submit</button>
          </form>
        </> : null  }
      </div>
    </>
  )
}

export default App
