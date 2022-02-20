import dtdj from './gifs/DeathToDadJokes.gif'
import chakra from './gifs/ChakraCafe.gif'
import reciPlenty from './gifs/ReciPlenty.gif'

function WebExperience(){

    return(
        <>

      <img className="blue" style={{width:"25%", height:"auto"}} src={dtdj} alt="Death to Dad Jokes demo" onClick={()=>console.log("elloGuvnah1")}/>
      <br />
      <img className="blue" style={{width:"25%", height:"auto"}} src={chakra} alt="Death to Dad Jokes demo" onClick={()=>console.log("elloGuvnah2")}/>
      <br />
      <img className="blue" style={{width:"25%", height:"auto"}} src={reciPlenty} alt="Death to Dad Jokes demo" onClick={()=>console.log("elloGuvnah3")}/>

        </>
    )
}

export default WebExperience;