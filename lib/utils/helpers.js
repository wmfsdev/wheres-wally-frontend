
function getImageDimensions(element) {
  const { height, width } = element.current.getBoundingClientRect()
  return { elementHeight: Math.round(height), elementWidth: Math.round(width) }
}

function normaliseCoordinates(imageEvent, elementDimensions, fileHeight, fileWidth) {

  const { elementHeight, elementWidth } = elementDimensions
  const coordX = imageEvent.current.clientX
  const coordY = imageEvent.current.clientY

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
  return { fileHeight, fileWidth }
}

function gameProgress(coordinateStatus, setSelectOptions, selectOptions) {

  switch (coordinateStatus) {
    case 'no element found':
      setSelectOptions(
        selectOptions.filter(option => option !== "defaultchar")
      )
      break
    case 'element found':
      setSelectOptions(
        selectOptions.filter(option => option !== "defaultchar")
      )
      break
    case 'win!':
  }

}

export { getImageDimensions, normaliseCoordinates, getFileDimensions, gameProgress }