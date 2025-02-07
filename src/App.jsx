
import './App.css'
import { useRef, useState, useEffect } from 'react'
import { Dropdown } from './components/Dropdown'

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

  const imageRef = useRef(null)
  let imageClickEvent = useRef(null)
  const [ clickState, setClickState ] = useState(false)

  const handleImageClick = (e) => {
    console.log("being clicked")
    if (!clickState) {
      setClickState(true)
      imageClickEvent.current = e 
    } else {
      setClickState(false)
    }
  }

  return (
    <>
      <Dropdown handleOption={() => setClickState(false)} isClicked={clickState} image={imageRef} imageEvent={imageClickEvent}/>
      <div className="wally-border">
        <img ref={imageRef} onClick={(e) => handleImageClick(e)} src="/src/assets/r_wally.jpg" alt="wheres wally" />
      </div>
    </>
  )
}

export default App
