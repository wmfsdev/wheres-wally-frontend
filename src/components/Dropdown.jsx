
import { useState } from 'react'
import { getImageDimensions, normaliseCoordinates, getFileDimensions } from '../../lib/utils/helpers.js'
import { submitCoordinates } from '../../lib/utils/api_helpers.js'

function Dropdown({ handleOption, isClicked, image, imageEvent }) {

   const [ selectedCharacter, setSelectedCharacter ] = useState('')

   function handleClick(e) {
      // DROPDOWN INFO
      console.log(selectedCharacter)
      const options = [...e.target.selectedOptions]
      const values = options.map(option => option.value)

      setSelectedCharacter(values[0])
      // IMAGE INFO
      const { fileHeight, fileWidth } = getFileDimensions(imageEvent) 
      const elementDimensions = getImageDimensions(image)
      const coordinates = normaliseCoordinates(imageEvent, elementDimensions, fileHeight, fileWidth)
   
      submitCoordinates(values[0], coordinates)  
      handleOption()
      // function to handle server response
      //    if character found  find way to not be able to resubmit
      //    
   }

   if (isClicked) {
      const { clientX, clientY } = imageEvent.current
      console.log(clientX, clientY)
   
      const styles = {
         left: clientX,
         top: clientY,
      }
      
      return (
         <div style={styles} className='clicked'>
            <form action="#">
               <label htmlFor="character">Character: </label>
               <select
                  onClick={(e) => handleClick(e)}
                  name="characters" 
                  id="character">
               <option value="defaultchar">char1</option>
               <option value="2">char2</option>
               <option value="3">char3</option>
               </select>
            </form>
         </div>
      )
   }
}

export { Dropdown }