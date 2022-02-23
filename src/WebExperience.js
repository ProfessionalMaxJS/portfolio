import dtdj from './gifs/DeathToDadJokes.gif'
import chakra from './gifs/ChakraCafe.gif'
import reciPlenty from './gifs/ReciPlenty.gif'

function WebExperience(){

    return(
        <>
        <h3 >ReciPlenty</h3>
        <div className="blue">
        <a href="https://youtu.be/Mw1BVkK5coM" target="_blank" rel="noreferrer noopener">
      <img src={reciPlenty} alt="ReciPlenty demo" />
      </a>
      <p>Test</p>
      </div>

      <h3>Chakra Cafe</h3>
      <div className="blue">
      <a href="https://youtu.be/Q_tBBrbX8oY" target="_blank" rel="noreferrer noopener">
      <img src={chakra} alt="Chakra Cafe demo" />
      </a>
      <p>Test</p>
      </div>

      <h3>Death to Dad Jokes </h3>
      <div className="blue">
      <a href="https://youtu.be/i81w1Ufl2RM" target="_blank" rel="noreferrer noopener">
      <img src={dtdj} alt="Death to Dad Jokes demo" />
      </a>
      <p>Test</p>
    </div>
        </>
    )
}

export default WebExperience;