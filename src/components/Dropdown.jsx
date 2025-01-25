
import { getImageDimensions, normaliseCoordinates, getFileDimensions, submitCoordinates } from '../../lib/utils/helpers.js'

function Dropdown({ isClicked, image, imageEvent }) {

   const handleClick = (e) => {

      // some kind of detection for if user clicks away from Dropbox
      console.log(e)

      const { fileHeight, fileWidth } = getFileDimensions(imageEvent) 
      const elementDimensions = getImageDimensions(image)
      const coordinates = normaliseCoordinates(imageEvent, elementDimensions, fileHeight, fileWidth)
      submitCoordinates(coordinates)
   }

   if (isClicked) {
      const { clientX, clientY } = imageEvent.current
      console.log(clientX, clientY)
   
      const styles = {
         left: clientX,
         top: clientY
      }
      
      return (
         <h1 style={styles} className="clicked" onClick={(e) => handleClick(e)}>CLICKED!</h1>
      )
   }
}

export { Dropdown }