
async function submitCoordinates(character, coordinates, boardId) {
  // const { x, y } = coordinates

   try {
      const response = await fetch(`http://localhost:3000/game/board/${boardId}`, {
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
      return data
   } catch(err) {
      console.log(err)
   } 
}

async function submitPlayerTime(playerId, gameRuntime, boardId) {
   try {
      await fetch('http://localhost:3000/game/player', {
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
   } catch(err) {
      console.log(err)
   }
}

export { submitCoordinates, submitPlayerTime }