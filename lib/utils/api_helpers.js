
async function submitCoordinates(character, coordinates) {
   
   const { x, y } = coordinates

   console.log("character", character)
   console.log("coordinates", x, y)

   try { // ../1 could come from client-side URL: /board?id=1 or just /board/1
      const response = await fetch('http://localhost:3000/game/board/1', {
         method: "POST",
         credentials: "include",
         headers: {
            'Content-type': 'application/json; charset=UTF-8',
         },
         body: JSON.stringify({
            character: character,
            coordinates: coordinates
         })
      })
      const data = await response.json()
      console.log(data) 
   } catch(err) {
      console.log(err)
   }
   
}

export { submitCoordinates }