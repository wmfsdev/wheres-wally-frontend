
async function submitCoordinates(character, coordinates) {
   
   const { x, y } = coordinates
   console.log("character", character)
   console.log("coordinates", x, y)

   try {
      const response = await fetch('http://localhost:3000/game/board/1', {
         method: "POST",
         credentials: "include",
         headers: {
            'Content-type': 'application/json; charset=UTF-8',
         },
         body: JSON.stringify({
            character: character,
            coordinates: coordinates // { x: 15, y: 25 }
         })
      })
      const data = await response.json()
      console.log(data)
      return data
   } catch(err) {
      console.log(err)
   } 
}

async function submitPlayerTime(playerId, gameRuntime, boardId) {
   try {
      const response = await fetch('http://localhost:3000/game/player', {
         method: 'PUT',
         headers: {
            'Content-type': 'application/json; charset=UTF-8',
         },
         body: JSON.stringify({
            playerId: playerId,
            gameRuntime: gameRuntime,
            boardId: boardId
         })
      })
      // const data = await response.json()
   } catch(err) {
      console.log(err)
   }
}

export { submitCoordinates, submitPlayerTime }