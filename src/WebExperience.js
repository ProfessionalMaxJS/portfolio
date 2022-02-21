import dtdj from './gifs/DeathToDadJokes.gif'
import chakra from './gifs/ChakraCafe.gif'
import reciPlenty from './gifs/ReciPlenty.gif'

function WebExperience(){

    return(
        <>

      <a href="https://youtu.be/i81w1Ufl2RM" target="_blank" rel="noreferrer noopener">
      <img className="blue" style={{width:"25%", height:"auto"}} src={dtdj} alt="Death to Dad Jokes demo" onClick={()=>console.log("elloGuvnah1")}/>
      </a><br />
      <a href="https://youtu.be/Q_tBBrbX8oY" target="_blank" rel="noreferrer noopener">
      <img className="blue" style={{width:"25%", height:"auto"}} src={chakra} alt="Death to Dad Jokes demo" onClick={()=>console.log("elloGuvnah2")}/>
      </a><br />
      <a href="https://youtu.be/Mw1BVkK5coM" target="_blank" rel="noreferrer noopener">
      <img className="blue" style={{width:"25%", height:"auto"}} src={reciPlenty} alt="Death to Dad Jokes demo" onClick={()=>console.log("elloGuvnah3")}/>
      </a>
        </>
    )
}

export default WebExperience;