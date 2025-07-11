import { useState, useEffect } from "react"
import { useNavigate } from "react-router"

function Characters({charArray, param, submitState}) {
  const characters = charArray
  const navigate = useNavigate()
  const [ state, setState ] = useState([
    { index: 0, name: 'WALLY'},
    { index: 1, name: 'WILMA'},
    { index: 2, name: 'WIZARD' },
    { index: 3, name: 'ODLAW' }
  ])

  useEffect(() => {
    setState([
      { index: 0, name: 'WALLY'},
      { index: 1, name: 'WILMA'},
      { index: 2, name: 'WIZARD' },
      { index: 3, name: 'ODLAW' }
    ])
  }, [param])

  useEffect(() => {
    if (characters.length > 0) {
      const character = characters[characters.length - 1].name
      
      setState(
        state.map((s) => {
          if (s.name === character) {
            return { 
              ...s, found: character
            }
          } else return s
        }) 
      )
    }
  }, [characters])

  async function submitPlayerName(e) {
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form)
    const playerId = formData.get('playerId')
    const playerName = formData.get('playerName')
 
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/game/player`, {
        method: 'PUT',
        headers: { 'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
          playerId: playerId,
          playerName: playerName,
        })
      })

      if (response.ok) {
        return navigate('/results')
      }
      // validation
      if (response.status === 422) {
        console.log(response)
        await response.json()
      } else throw response
    } catch (err) {
      navigate('/error')
    }
  }

  const chars = state.map(function(char) { 
    if (char.found) {
      return <div className='character' key={char.index}>
      <img src={`/found_${char.found.toLocaleLowerCase()}.png`} alt="" /></div>
    } else
    return <div className='character' key={char.index}>
      <img src={`/find_${char.name.toLocaleLowerCase()}.png`} alt="" /></div>
  })

  return (
    <>
    <div className="character-wrapper">
      {chars}
    </div>
     <div className='characters'>
     { submitState ?
     <div className="submit-player-form">
       <form action="PUT" onSubmit={submitPlayerName}>
         <input type="hidden" name="playerId" value={submitState.playerId} readOnly={true} />
         <input type="text" name="playerName" placeholder="enter name (max 12 chars)" required minLength={1} maxLength={12} /> 
         <button type="submit">SUBMIT</button>
       </form>
       <p>COMPLETED IN {submitState.gameRuntime} SECONDS!</p>
     </div> : null  }
   </div>
   </>
  )
}

export default Characters