
import { useEffect, useState } from 'react'
import { getImageDimensions, normaliseCoordinates, getFileDimensions, gameProgress } from '../../lib/utils/helpers.js'
import { submitCoordinates } from '../../lib/utils/api_helpers.js'
import { useParams } from 'react-router'
import { useNavigate } from 'react-router'


function Dropdown({ submit, characters, handleOption, isClicked, image, imageEvent }) {

   const { id } = useParams()
   const navigate = useNavigate()
   const characterOptions = [
      { id: 1, value: `wilma_${id}`, name: "WILMA" },
      { id: 2, value: `wally_${id}`, name: "WALLY" },
      { id: 3, value: `wizard_${id}`, name: "WIZARD" },
      { id: 4, value: `odlaw_${id}`, name: "ODLAW" }
   ]
   const [ selectOptions, setSelectOptions ] = useState(characterOptions)

   useEffect(() => {
      setSelectOptions(characterOptions)
   }, [id])

   async function handleClick(e) {
      // DROPDOWN INFO
      try {
         const options = [...e.target.selectedOptions]
         const values = options.map(option => option.value)
         const names = options.map(option => option.text)
         // IMAGE INFO
         const { fileHeight, fileWidth } = getFileDimensions(imageEvent) 
         const elementDimensions = getImageDimensions(image)
         const coordinates = normaliseCoordinates(imageEvent, elementDimensions, fileHeight, fileWidth)

         handleOption() // handles appearance of dropdown menu

         const response = await submitCoordinates(values[0], coordinates, id)
         await gameProgress(id, response, setSelectOptions, selectOptions, values[0], characters, names[0])
         
         if (response.gameRuntime) {
            window.scrollTo(0, 0);
            submit({ gameRuntime: response.gameRuntime, playerId: response.playerId })
         }
      } catch(err) {
         navigate('/error')
      } 
   }

   const options = selectOptions.map((option) => 
      <option key={option.id} value={option.value}>{option.name}</option>
   )

   if (isClicked) {
      const { pageX, pageY } = imageEvent.current
      const offset = imageEvent.current.target.offsetTop
      const styles = {
         left: pageX,
         top: pageY,
      }
      
      return (
         <>
         <div style={styles} className='clicked'>
            <form>
               <label htmlFor="character">Character: </label>
               <select
                  onChange={(e) => handleClick(e)}
                  name="characters" 
                  id="character">
                  <option value="">SELECT</option>
                  {options}
               </select>
            </form>
         </div>
         </>
      )
   }
}

export { Dropdown }