
import { useState } from 'react'
import { getImageDimensions, normaliseCoordinates, getFileDimensions, gameProgress } from '../../lib/utils/helpers.js'
import { submitCoordinates } from '../../lib/utils/api_helpers.js'

function Dropdown({ characters, handleOption, isClicked, image, imageEvent }) {

   const [ selectedCharacter, setSelectedCharacter ] = useState('')
   const [ selectOptions, setSelectOptions ] = useState([
      { id: 1, value: "defaultchar", name: "DEFAULT" },
      { id: 2, value: "2ndchar", name: "2NDCHAR" } 
   ])

   async function handleClick(e) {
      // DROPDOWN INFO
      const options = [...e.target.selectedOptions]
      const values = options.map(option => option.value)
      const names = options.map(option => option.text)
      
      setSelectedCharacter(values[0])
      // IMAGE INFO
      const { fileHeight, fileWidth } = getFileDimensions(imageEvent) 
      const elementDimensions = getImageDimensions(image)
      const coordinates = normaliseCoordinates(imageEvent, elementDimensions, fileHeight, fileWidth)
      const { status } = await submitCoordinates(values[0], coordinates)
   
      handleOption() 
      characters({ name: names[0] })
      gameProgress(status, setSelectOptions, selectOptions, values[0])
   }

   const options = selectOptions.map((option) => 
      <option key={option.id} value={option.value}>{option.name}</option>
   )

   if (isClicked) {
      const { clientX, clientY } = imageEvent.current   
      const styles = {
         left: clientX,
         top: clientY,
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