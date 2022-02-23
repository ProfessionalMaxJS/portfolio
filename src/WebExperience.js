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
      <p>Cafe-type mockup site built with <span className="white" onClick={()=>window.open("https://google.com")}>Luis Escobar</span> to represent the menu and offerings from Chakra Cafe (a real, but unafilliated, restaurant in Queens, NY).
        </p>
      </div>

      <h3>Death to Dad Jokes </h3>
      <div className="blue">
      <a href="https://youtu.be/i81w1Ufl2RM" target="_blank" rel="noreferrer noopener">
      <img src={dtdj} alt="Death to Dad Jokes demo" />
      </a>
      <p>Using HTML, CSS and ("vanilla") Javascript, <span className="white" onClick={()=>window.open("https://github.com/Smith-Reesie")} > Maurice Smith</span> and I built this to allow users to cycle through (bad) Dad Jokes and rate them (alongside spoooooky sound effects), keeping a running tally of liked vs disliked. Each new joke is loaded with the user's click of a rating; if (newJoke.includes("?")), then the joke is loaded with the punchline (ie, all text after "?") hidden, and a button is displayed to remind the user of their own complicity in the cringiness. 
      <span className="white" onClick={()=>window.open("https://github.com/ProfessionalMaxJS/DeathToDadJokes")}>  Git Repo.</span>
      <span className="white" onClick={()=>window.open("https://professionalmaxjs.github.io/DeathToDadJokes")}>  App.</span>
      </p>
    </div>
        </>
    )
}

export default WebExperience;