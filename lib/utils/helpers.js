
import { submitPlayerTime } from "./api_helpers"

function getImageDimensions(element) {
  const { height, width } = element.current.getBoundingClientRect()
  return { elementHeight: Math.round(height), elementWidth: Math.round(width) }
}

function normaliseCoordinates(imageEvent, elementDimensions, fileHeight, fileWidth) {

  const { elementHeight, elementWidth } = elementDimensions
  const coordX = imageEvent.current.pageX
  const coordY = imageEvent.current.pageY

  // console.log("COORDINATES: ", coordY)

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

async function gameProgress(boardId, currentProgress, setSelectOptions, selectOptions, value) {

  const { status, gameRuntime, playerId } = currentProgress

  switch (status) {
    case 'no element found':
      setSelectOptions(
        selectOptions.filter(option => option.value !== value )
      )
      break
    case 'element found':
      setSelectOptions(
        selectOptions.filter(option => option !== "defaultchar")
      )
      break
    case 'win!':
      console.log("win")
      console.log("board id: ", boardId)
      console.log("player ID: ", playerId)
      submitPlayerTime(playerId, gameRuntime, boardId)
  }
}

export { getImageDimensions, normaliseCoordinates, getFileDimensions, gameProgress }