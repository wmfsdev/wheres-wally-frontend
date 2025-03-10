
async function submitCoordinates(character, coordinates, boardId) {
   try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/game/board/${boardId}`, {
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
      await fetch(`${import.meta.env.VITE_API_URL}/game/player`, {
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