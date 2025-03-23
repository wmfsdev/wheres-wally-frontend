
import { useLoaderData } from "react-router"
import { Link } from "react-router-dom"

function Results() {

   const { maze, football, rome } = useLoaderData()

   return (
      <>
      <h1>LEADER BOARD</h1>
      <div className="results-wrapper">
         <div className="result-list-wrapper">
            <ul className="result-list">
               <h2>MAZE</h2>
               { maze.map((result, index) =>
               <li className="result-list-item" key={index}>
                  <p>{result.name}</p>
                  <p>{result.gameLength} seconds</p>          
               </li>)
               }
            </ul>
            <ul className="result-list">
               <h2>FOOTBALL</h2>
               { football.map((result, index) =>
               <li className="result-list-item" key={index}>
                  <p>{result.name}</p>
                  <p>{result.gameLength} seconds</p>
               </li>)
               }
            </ul>
            <ul className="result-list">
               <h2>ROME</h2>
               { rome.map((result, index) =>
               <li className="result-list-item" key={index}>
                  <p>{result.name}</p>
                  <p>{result.gameLength} seconds</p>
               </li>)
               }
            </ul>
         </div>
      </div>
      <h2 className="play-again"><Link to={'/'}>Play Again?</Link></h2>
      </>
   )
}

export { Results }