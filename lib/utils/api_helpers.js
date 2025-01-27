
async function submitCoordinates(character, coordinates) {
   
   const { x, y } = coordinates

   console.log("character", character)
   console.log("coordinates", x, y)

   try {
      const response = await fetch('http://localhost:3000/game/board', {
         method: "POST",
         headers: {
            'Content-type': 'application/json; charset=UTF-8',
         },
         body: JSON.stringify({
            character: character,
            coordinates: coordinates
         })
      })
      const data = await response.json()
      // console.log(response)
   
   } catch(err) {
      console.log(err)
   }
   
}

export { submitCoordinates }