
import { submitPlayerTime } from "./api_helpers"

function getImageDimensions(element) {
  const { height, width } = element.current.getBoundingClientRect()
  return { elementHeight: Math.round(height), elementWidth: Math.round(width) }
}

function normaliseCoordinates(imageEvent, elementDimensions, fileHeight, fileWidth) {
  const { elementHeight, elementWidth } = elementDimensions
  const coordX = imageEvent.current.pageX
  const coordY = imageEvent.current.pageY - imageEvent.current.target.offsetTop
  const heightScaleFactor = fileHeight / elementHeight 
  const widthScaleFactor = fileWidth / elementWidth
  const normalisedX = coordX * widthScaleFactor
  const normalisedY = coordY * heightScaleFactor
  return { x: Math.round(normalisedX), y: Math.round(normalisedY) }
}

function getFileDimensions(imageEvent) {
  const imageUrl = imageEvent.current.target.currentSrc
  const image = new Image()
  image.src = imageUrl

  const fileHeight = image.height
  const fileWidth = image.width
  return { fileHeight, fileWidth }
}

async function gameProgress(boardId, currentProgress, setSelectOptions, selectOptions, value, characters, name) {

  const { status, gameRuntime, playerId } = currentProgress

  switch (status) {
    case 'no element found':
      break
    case 'found element':
      setSelectOptions(
        selectOptions.filter(option => option.value !== value)
      )
      characters({ name: name })
      break
    case 'win!':
      setSelectOptions(
        selectOptions.filter(option => option.value !== value)
      )
      characters({ name: name })
      submitPlayerTime(playerId, gameRuntime, boardId)
  }
}

export { getImageDimensions, normaliseCoordinates, getFileDimensions, gameProgress }