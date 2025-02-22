
import { submitPlayerTime } from "./api_helpers"

function getImageDimensions(element) {
  const { height, width } = element.current.getBoundingClientRect()
  return { elementHeight: Math.round(height), elementWidth: Math.round(width) }
}

function normaliseCoordinates(imageEvent, elementDimensions, fileHeight, fileWidth) {

  const { elementHeight, elementWidth } = elementDimensions
  const coordX = imageEvent.current.pageX
  // to account for parent elements
  const coordY = imageEvent.current.pageY - imageEvent.current.target.offsetTop

  // console.log(coordX, coordY)
  // divide the default height/width of image by the current height/width to determine how much smaller it is on client
  // default height/width calculated before now, somehow:/
  const heightScaleFactor = fileHeight / elementHeight 
  const widthScaleFactor = fileWidth / elementWidth

  const normalisedX = coordX * widthScaleFactor
  const normalisedY = coordY * heightScaleFactor
  return { x: Math.round(normalisedX), y: Math.round(normalisedY) }
}

function getFileDimensions(imageEvent) {
  console.log(imageEvent.current.target.currentSrc)

  const imageUrl = imageEvent.current.target.currentSrc
  const image = new Image()
  image.src = imageUrl

  const fileHeight = image.height
  const fileWidth = image.width
  console.log(fileHeight, fileWidth)
  return { fileHeight, fileWidth }
}

async function gameProgress(boardId, currentProgress, setSelectOptions, selectOptions, value, characters, name) {

  const { status, gameRuntime, playerId } = currentProgress

  switch (status) {
    case 'no element found':
      console.log("no element found")
    // create temp element: "not found", pass back up as state?
      //   selectOptions.filter(option => option !== "defaultchar")
      // )
      
      break
    case 'found element':
      setSelectOptions(
        selectOptions.filter(option => option.value !== value)
      )
      characters({ name: name })
      break
    case 'win!':
      console.log("win")
      setSelectOptions(
        selectOptions.filter(option => option.value !== value)
      )
      characters({ name: name })
      submitPlayerTime(playerId, gameRuntime, boardId)
  }
}

export { getImageDimensions, normaliseCoordinates, getFileDimensions, gameProgress }