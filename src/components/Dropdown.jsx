
import { useState } from 'react'
import { getImageDimensions, normaliseCoordinates, getFileDimensions, gameProgress } from '../../lib/utils/helpers.js'
import { submitCoordinates } from '../../lib/utils/api_helpers.js'
import { useParams } from 'react-router'


function Dropdown({ submit, characters, handleOption, isClicked, image, imageEvent }) {

   const { id } = useParams()
   const [ selectOptions, setSelectOptions ] = useState([
      { id: 1, value: "wilma", name: "WILMA" },
      { id: 2, value: "wally", name: "WALLY" },
      { id: 3, value: "wizard", name: "WIZARD" }
   ])

   async function handleClick(e) {
      // DROPDOWN INFO
      const options = [...e.target.selectedOptions]
      const values = options.map(option => option.value)
      const names = options.map(option => option.text)
      // IMAGE INFO
      const { fileHeight, fileWidth } = getFileDimensions(imageEvent) 
      const elementDimensions = getImageDimensions(image)
      const coordinates = normaliseCoordinates(imageEvent, elementDimensions, fileHeight, fileWidth)

      const response = await submitCoordinates(values[0], coordinates, id)
      
      handleOption() // handles appearance of dropdown menu 
      await gameProgress(id, response, setSelectOptions, selectOptions, values[0], characters, names[0])
      
      if (response.gameRuntime) {
         console.log("win with time")
         submit(response.playerId)
      }
    //  characters({ name: names[0] })
   }

   const options = selectOptions.map((option) => 
      <option key={option.id} value={option.value}>{option.name}</option>
   )

   if (isClicked) {
      const { pageX, pageY } = imageEvent.current
      const offset = imageEvent.current.target.offsetTop
      console.log("X: ", pageX)
      console.log("Y: ", pageY - offset)

      const styles = {
         left: pageX,
         top: pageY,
      }
      
      return (
         <>
         <div style={styles} className='clicked'>
            <form action="#">
               <label htmlFor="character">Character: </label>
               <select
                  onClick={(e) => handleClick(e)}
                  name="characters" 
                  id="character">
                  {options}
               </select>
            </form>
         </div>
         </>
      )
   }
}

export { Dropdown }