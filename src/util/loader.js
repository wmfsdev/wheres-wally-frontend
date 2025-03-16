
export async function gameResultsLoader() {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/leaderboard`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      credentials: "include"
    })

    const data = await response.json()
    
    console.log(data)
    return data

  } catch (error) {
    console.log(error)
  }
}