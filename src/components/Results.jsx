
import { useLoaderData } from "react-router"
import { Link } from "react-router-dom"

function Results() {

   const results = useLoaderData()
   console.log(results)

   return (
      <>
      <h1>LEADER BOARD</h1>
      <ul className="result-titles">
         <li><p>Name</p></li>
         <li><p>Game Length</p></li>
         <li><p>Board</p></li>
      </ul>
      <ul className="result-list">
         { results.map((result, index) =>
         <li className="result-list-item" key={index}>
            <p>{result.name}</p>
            <p>{result.gameLength} seconds</p>
            <p>{result.board}</p>
         </li>)
         }
      </ul>
      <h2 className="play-again"><Link to={'/'}>Play Again?</Link></h2>
      </>
   )
}

export { Results }