
export async function gameResultsLoader() {
  try {
    const response = await fetch('http://localhost:3000/leaderboard', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    })

    const data = await response.json()
    
    console.log(data)
    return data

  } catch (error) {
    console.log(error)
  }
}