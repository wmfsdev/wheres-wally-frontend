
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

  // some other clickState required, switch to false when user clicks away from Dropbox
  
  const handleImageClick = (e) => {
    setClickState(true)
    imageClickEvent.current = e
  }

  return (
    <>
      <Dropdown isClicked={clickState} image={imageRef} imageEvent={imageClickEvent}/>
      <div className="wally-border">
        <img ref={imageRef} onClick={(e) => handleImageClick(e)} src="/src/assets/r_wally.jpg" alt="wheres wally" />
      </div>
    </>
  )
}

export default App
