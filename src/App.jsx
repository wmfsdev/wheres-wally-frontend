
import './App.css'

import { useRef, useState } from 'react'
import { Dropdown } from './components/Dropdown'

function App() {

  const imageRef = useRef(null)
  let imageClickEvent = useRef(null)
  const [ clickState, setClickState ] = useState(false)

  
  const handleImageClick = (e) => {
    setClickState(true)
    console.log(e)
    imageClickEvent.current = e
  }

  return (
    <>
      <Dropdown isClicked={clickState} image={imageRef} imageEvent={imageClickEvent}/>
      <div className="wally-border">
        <img ref={imageRef} onClick={(e) => handleImageClick(e, imageClickEvent)} src="/src/assets/r_wally.jpg" alt="wheres wally" />
      </div>
    </>
  )
}

export default App
