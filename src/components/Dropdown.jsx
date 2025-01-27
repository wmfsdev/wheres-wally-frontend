
import { useState } from 'react'
import { getImageDimensions, normaliseCoordinates, getFileDimensions } from '../../lib/utils/helpers.js'
import { submitCoordinates } from '../../lib/utils/api_helpers.js'

function Dropdown({ isClicked, image, imageEvent }) {

   const [ selectedCharacter, setSelectedCharacter ] = useState()

   function handleChange(e) {
      // DROPDOWN INFO
      const options = [...e.target.selectedOptions]
      const values = options.map(option => option.value)

      setSelectedCharacter(values)
      // some kind of detection for if user clicks away from Dropbox... console.log(e)
      // IMAGE INFO
      const { fileHeight, fileWidth } = getFileDimensions(imageEvent) 
      const elementDimensions = getImageDimensions(image)
      const coordinates = normaliseCoordinates(imageEvent, elementDimensions, fileHeight, fileWidth)
   
      submitCoordinates(values[0], coordinates)     
   }

   // maybe an else to remove element?
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
                  onChange={(e) => handleChange(e)}
                  value={selectedCharacter} 
                  name="characters" 
                  id="character">
               <option value="char1">char1</option>
               <option value="char2">char2</option>
               <option value="char3">char3</option>
               </select>
            </form>
         </div>
      )
   }
}

export { Dropdown }