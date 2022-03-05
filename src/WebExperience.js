import dtdj from './gifs/DeathToDadJokes.gif'
import chakra from './gifs/ChakraCafe.gif'
import reciPlenty from './gifs/ReciPlenty.gif'
import cinema from './gifs/USSRapture.gif'

function WebExperience(){
  
    return(
        <>
        <h2 style={{textAlign:"center"}} >My Projects</h2>
        <h3 >ReciPlenty</h3>
        <div className="blue">
        <a href="https://youtu.be/Mw1BVkK5coM" target="_blank" rel="noreferrer noopener">
      <img src={reciPlenty} alt="ReciPlenty demo" onMouseOver={()=>reciPlenty.play()} />
      </a>
      <p>Capstone project for FlatIron School Software Engineering course. Utilizes Ruby bcrypt gem, Rails Active Storage technology, Spoonacular API (+2 others), to bring users a straightforward way to log their favorite recipes. Recipes developed by the user can be written on a "worksheet"-like screen (where users can also upload photos for their dishes), and  saved onto their list. Recipes discovered through the Search bar can also be saved to the same master list. All saved recipes include a toggle for the user to track whether or not they have cooked that dish, as well as the ability to be edited.<br/>Last updated February, 2022.
      <a className="white" href="https://github.com/ProfessionalMaxJS/ReciPlenty" target="_blank" rel="noreferrer noopener">  Git Repo.</a>
      <span className="white" onClick={()=>window.open("https://reciplenty.herokuapp.com/")}>  App.</span>
      </p></div>

      <h3>Death to Dad Jokes </h3>
      <div className="blue">
      <a href="https://youtu.be/i81w1Ufl2RM" target="_blank" rel="noreferrer noopener">
      <img src={dtdj} alt="Death to Dad Jokes demo" />
      </a>
      <p>Using HTML, CSS and ("vanilla") Javascript, <span className="white" onClick={()=>window.open("https://github.com/Smith-Reesie")} > Maurice Smith</span> and I built this to allow users to cycle through "Dad" Jokes (c/o the "icanazdadjoke" API) and rate them (alongside spoooooky sound effects), keeping a running tally of liked vs disliked. Each new joke is loaded with the user's click of a rating; if (newJoke.includes("?")), then the joke is loaded with the punchline (ie, all text after "?") hidden, and a button is displayed to remind the user of their own complicity in the cringiness.<br />Completed October, 2021. 
      <span className="white" onClick={()=>window.open("https://github.com/ProfessionalMaxJS/DeathToDadJokes")}>  Git Repo.</span>
      <span className="white" onClick={()=>window.open("https://professionalmaxjs.github.io/DeathToDadJokes")}>  App.</span>
      </p>
    </div>

      <h3>Chakra Cafe</h3>
      <div className="blue">
      <a href="https://youtu.be/Q_tBBrbX8oY" target="_blank" rel="noreferrer noopener">
      <img src={chakra} alt="Chakra Cafe demo" />
      </a>
      <p>Cafe-type mockup site built with <span className="white" onClick={()=>window.open("https://google.com")}>Luis Escobar</span> to represent the menu offerings and order system from Chakra Cafe (a real, but unafilliated, restaurant in Queens, NY). Uses ruby's bcrypt gem to handle authentication/authorization for accounts. Without accounts, users can only browse the site; with accounts they can place orders after logging in. Although the front end functionality is limited to filling and purchasing from a shopping cart, backend tables are in place to track/provide users with their order history, as well as a points/rewards system (which currently only shows up as an "easter egg" in the console) - for future buildouts.<br />Completed January, 2022. 
      <span className="white" onClick={()=>window.open("https://github.com/ProfessionalMaxJS/Project_all_in_one")}>  Git Repo.</span>
      <span className="white" onClick={()=>window.open("https://chakra-cafe.herokuapp.com/")}>  App.</span>
        </p>
      </div>

      <h3>The Cinema</h3>
      <div className="blue">
      <a href="https://youtu.be/opGSTxjautA" target="_blank" rel="noreferrer noopener">
      <img src={cinema} alt="USS_Rapture demo" />
      </a>
      <p>Test<br />Completed September, 2021. 
      <span className="white" onClick={()=>window.open("https://github.com/ProfessionalMaxJS/USS_Rapture")}>  Git Repo.</span>
      <span className="white" onClick={()=>window.open("https://professionalmaxjs.github.io/USS_Rapture/")}>  Site.</span>
        </p>
      </div>


        </>
    )
}

export default WebExperience;