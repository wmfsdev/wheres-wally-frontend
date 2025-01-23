
import './App.css'
import { getImageDimensions, normaliseCoordinates, getFileDimensions } from '../lib/utils/helpers'
import { useRef } from 'react'

function App() {

  const imageRef = useRef(null)

  const handleClick = (e, ref) => {

    const { fileHeight, fileWidth } = getFileDimensions(e) 
    const elementDimensions = getImageDimensions(ref)
    const coordinates = normaliseCoordinates(e, elementDimensions, fileHeight, fileWidth)
  
  }

  return (
    <div className="wally-border">
      <img ref={imageRef} onClick={(e) => handleClick(e, imageRef)} src="/src/assets/r_wally.jpg" alt="wheres wally" />
    </div>
  )
}

export default App
