import redirect from './gifs/redirect.jpg'
import {Link} from 'react-router-dom'

function Redirect(){

    return(
        <>
        <div style={{display:"flex", alignItems: "center", justifyContent:"center", marginTop:"10vh"}} >
        <div style={{display:"flex", flexDirection: "column"}} >Sorry, there's nothing at this route.
        <Link style={{textAlign:"center"}} className="goHome"  to="/">Home</Link>
        </div>
        <img style={{width:"40vw", height:"auto"}} alt="cartoon showing the overcoming of a dead end" src={redirect} />
        </div>
        </>
    )
}

export default Redirect;