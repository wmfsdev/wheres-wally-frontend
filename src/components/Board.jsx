
import { useRef, useState, useEffect } from 'react'
import { Dropdown } from './Dropdown'
import { useParams } from 'react-router'
import { useOutletContext } from 'react-router'

function Board() {

  const { id } = useParams()
  const [ setBoardState, characters, setCharacters, param, setParam, submitState, setSubmitState] = useOutletContext()
  
  useEffect(() => {
    setParam(id)
  })

  useEffect(() => {
    setBoardState(true)
  },)
  
  useEffect(() => {
    async function fetchData() {
      console.log("fetching")
      await fetch(`${import.meta.env.VITE_API_URL}/game/board`, {
      
      })
    }
    fetchData()
  }, [param])
  
  const imageRef = useRef(null)
  let imageClickEvent = useRef(null)
  const [ clickState, setClickState ] = useState(false)

  const handleImageClick = (e) => {
    if (!clickState) {
      imageClickEvent.current = e 
      setClickState(true)
    } else {
      setClickState(false)
    }
  }

  return (
    <div id='main'>
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
        <img ref={imageRef} onClick={(e) => handleImageClick(e)} src={`/wally_${id}.jpeg`} alt="wheres wally" />
      </div>
      <div className='characters'>
      </div>
    </div>
  )
}

export default Board
