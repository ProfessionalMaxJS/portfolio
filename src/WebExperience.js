// import { useState } from 'react';
import ProjectDetail from './ProjectDetail'
import dtdj from './gifs/DeathToDadJokes.gif'
import dtdjStill from './gifs/dtdjStill.jpg'
import chakra from './gifs/ChakraCafe.gif'
import chakraStill from './gifs/ChakraCafeStill.jpg'
import reciPlenty from './gifs/ReciPlenty.gif'
import reciPlentyStill from './gifs/ReciPlentyStill.jpg'
import cinema from './gifs/USSRapture.gif'
import cinemaStill from './gifs/CinemaStill.jpg'
import {Link} from 'react-router-dom'

function WebExperience(){

  // const [playingReciPlenty, setPlayingReciPlenty] = useState(false)
  // const [playingDTDJ, setPlayingDTDJ] = useState(false)
  // const [playingChakra, setPlayingChakra] = useState(false)
  // const [playingCinema, setPlayingCinema] = useState(false)

  const projects = [
    {
      title: "ReciPlenty",
      vidLink: "https://youtu.be/Mw1BVkK5coM",
      projectGif: reciPlenty,
      projectJpg: reciPlentyStill,
      lastUpdated: "Last Updated February, 2022. ",
      gitRepo: "https://github.com/ProfessionalMaxJS/ReciPlenty",
      linkedApp: "https://reciplenty.herokuapp.com/",
      description: "Capstone project for FlatIron School Software Engineering course. Utilizes Ruby bcrypt gem, Rails Active Storage technology, Spoonacular API (+2 others), to bring users a straightforward way to log their favorite recipes. Recipes developed by the user can be written on a 'worksheet'-like screen (where users can also upload photos for their dishes), and  saved onto their list. Recipes discovered through the Search bar can also be saved to the same master list. All saved recipes include a toggle for the user to track whether or not they have cooked that dish, as well as the ability to be edited.",
      collaborator:"",
      collaboratorURL:"",
      descriptionPtII:""
    },
    {
      title: "Death to Dad Jokes",
      vidLink: "https://youtu.be/i81w1Ufl2RM",
      projectGif: dtdj,
      projectJpg: dtdjStill,
      lastUpdated: "Last Updated October, 2021",
      gitRepo: "https://github.com/ProfessionalMaxJS/DeathToDadJokes",
      linkedApp: "https://professionalmaxjs.github.io/DeathToDadJokes",
      description: `Using HTML, CSS and ("vanilla") Javascript,`,
      collaborator: "Maurice Smith",
      collaboratorURL:"https://github.com/Smith-Reesie",
      descriptionPtII: `and I built this to allow users to cycle through "Dad" Jokes (c/o the 'icanazdadjoke' API) and rate them (alongside spoooooky sound effects), keeping a running tally of liked vs disliked. Each new joke is loaded with the user's click of a rating; if (newJoke.includes("?")), then the joke is loaded with the punchline (ie, all text after "?") hidden, and a button is displayed to remind the user of their own complicity in the cringiness.`
    },
    {
      title: "Chakra Cafe",
      vidLink: "https://youtu.be/Q_tBBrbX8oY",
      projectGif: chakra,
      projectJpg: chakraStill,
      lastUpdated: "Last Updated January, 2022. ",
      gitRepo: "https://github.com/ProfessionalMaxJS/Project_all_in_one",
      linkedApp: "https://chakra-cafe.herokuapp.com/",
      description: `Cafe-type mockup site built with`,
      collaborator: "Luis Escobar",
      collaboratorURL: "https://www.luisalfredoescobar.com/",
      descriptionPtII: `to represent the menu offerings and order system from Chakra Cafe (a real, but unafilliated, restaurant in Queens, NY). Uses ruby's bcrypt gem to handle authentication/authorization for accounts. Without accounts, users can only browse the site; with accounts they can place orders after logging in. Although the front end functionality is limited to filling and purchasing from a shopping cart, backend tables are in place to track/provide users with their order history, as well as a points/rewards system (which currently only shows up as an "easter egg" in the console) - for future buildouts`
    },
    {
      title: "The Cinema",
      vidLink: "https://youtu.be/opGSTxjautA",
      projectGif: cinema,
      projectJpg: cinemaStill,
      lastUpdated: "Completed September, 2021",
      gitRepo: "https://github.com/ProfessionalMaxJS/USS_Rapture",
      linkedApp: "https://professionalmaxjs.github.io/USS_Rapture/",
      description: `My first ever site! Made as an onboarding/pre-class requirement for the FlatIron School, I had some fun with this one. The stylistic accomplishments I'm most proud of are hilighted in the accompanying video (to the left of this text), but in the future I plan to revisit/change the user's popcorn interaction, as well as implement onScroll event listeners to darken the background image (ie, the lights going down at showtime). Details about my experiences building this website were the subject of an early blog post, linked`,
      collaborator: "here.",
      descriptionPtII:""
    }
  ]
  
    return(
        <>
    <Link className="goHome" to="/" >Home</Link>
        
        <div id="myProjects" >
        <h2 >My Projects</h2>
        <p style={{fontSize:"1.5rem"}} >For best results, please rotate your phone to Landscape mode.</p>
        </div>

      {projects.map(project => <ProjectDetail project={project} />)}

      <Link id="bottom-bottom" className="goHome" to="/" >Home</Link>

        </>
    )
}

export default WebExperience;