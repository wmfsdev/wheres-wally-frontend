
import { useLoaderData, useLocation } from "react-router"
import { Link } from "react-router-dom"

function Results() {

   const { maze, football, rome } = useLoaderData()
   const { state } = useLocation();
   console.log(state)

   return (
      <>
      <div className="results-titles">
         <h1>WHERE'S WALLY?</h1>
         <h1>LEADER BOARD</h1>
      </div>
      <div className="results-wrapper">
         <div className="result-list-wrapper">
            <ul className="result-list">
               <h2><Link to='/board/maze'>MAZE</Link></h2>
               { maze.length === 0 ?
                  <p>No one has complete this yet!</p> : 
                  maze.map((result, index) =>
                     <li className="result-list-item" key={index}>
                     <p>{result.name}</p>
                     <p>{result.gameLength} seconds</p>          
                     </li>)
               }
            </ul>
            <ul className="result-list">
               <h2><Link to='/board/football'>FOOTBALL</Link></h2>
               { football.length === 0 ?
                  <p>No entries... yet!</p> : 
                  football.map((result, index) =>
                     <li className="result-list-item" key={index}>
                     <p>{result.name}</p>
                     <p>{result.gameLength} seconds</p>          
                     </li>)
               }
            </ul>
            <ul className="result-list">
               <h2><Link to='/board/rome'>ROME</Link></h2>
               { rome.length === 0 ?
                  <p>No entries... yet!</p> : 
                  rome.map((result, index) =>
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