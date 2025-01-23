
function getImageDimensions(element) {
  const { height, width } = element.current.getBoundingClientRect()
  return { elementHeight: Math.round(height), elementWidth: Math.round(width) }
}

function normaliseCoordinates(e, elementDimensions, fileHeight, fileWidth) {

 // console.log(elementDimensions)
  const { elementHeight, elementWidth } = elementDimensions
  const coordX = e.clientX
  const coordY = e.clientY

  // divide the default height/width of image by the current height/width to determine how much smaller it is on client
  // default height/width calculated before now, somehow:/
  const heightScaleFactor = fileHeight / elementHeight 
  const widthScaleFactor = fileWidth / elementWidth

  const normalisedX = coordX * widthScaleFactor
  const normalisedY = coordY * heightScaleFactor

  return [ Math.round(normalisedX), Math.round(normalisedY) ]
}

function getFileDimensions(e) {

  const imageUrl = e.target.currentSrc
  const image = new Image()
  image.src = imageUrl

  const fileHeight = image.height
  const fileWidth = image.width

  return { fileHeight, fileWidth }
}




export { getImageDimensions, normaliseCoordinates, getFileDimensions }