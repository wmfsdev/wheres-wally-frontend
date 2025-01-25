
import { getImageDimensions, normaliseCoordinates, getFileDimensions, submitCoordinates } from '../../lib/utils/helpers.js'

function Dropdown({ isClicked, image, imageEvent }) {

   const handleClick = () => {

      const { fileHeight, fileWidth } = getFileDimensions(imageEvent) 
      const elementDimensions = getImageDimensions(image)
      const coordinates = normaliseCoordinates(imageEvent, elementDimensions, fileHeight, fileWidth)
      submitCoordinates(coordinates)
   }

   if (isClicked) {
      return (
         <h1 className="clicked" onClick={(e) => handleClick(e)}>CLICKED!</h1>
      )
   }
}

export { Dropdown }