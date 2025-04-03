import { Link } from "react-router-dom"

function Error() {

    return (
        <div className="error-headers">
            <h1>Something went wrong...</h1>
            <h2><Link to='/'>Try again?</Link></h2>
        </div>
    )
}

export default Error