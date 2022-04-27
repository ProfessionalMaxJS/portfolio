import { useState } from 'react';
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

  const [playingReciPlenty, setPlayingReciPlenty] = useState(false)
  const [playingDTDJ, setPlayingDTDJ] = useState(false)
  const [playingChakra, setPlayingChakra] = useState(false)
  const [playingCinema, setPlayingCinema] = useState(false)

  const projects = [
    {
      title: "ReciPlenty",
      vidLink: "https://youtu.be/Mw1BVkK5coM",
      projectGif: reciPlenty,
      projectJpg: reciPlentyStill,
      lastUpdated: "February, 2022. ",
      gitRepo: "https://github.com/ProfessionalMaxJS/ReciPlenty",
      linkedApp: "https://reciplenty.herokuapp.com/",
      description: "Capstone project for FlatIron School Software Engineering course. Utilizes Ruby bcrypt gem, Rails Active Storage technology, Spoonacular API (+2 others), to bring users a straightforward way to log their favorite recipes. Recipes developed by the user can be written on a 'worksheet'-like screen (where users can also upload photos for their dishes), and  saved onto their list. Recipes discovered through the Search bar can also be saved to the same master list. All saved recipes include a toggle for the user to track whether or not they have cooked that dish, as well as the ability to be edited."
    } 
  ]
  
    return(
        <>
    <Link className="goHome" to="/" >Home</Link>
        
        <div id="myProjects" >
        <h2 >My Projects</h2>
        <p style={{fontSize:"1.5rem"}} >For best results, please rotate your phone to Landscape mode.</p>
        </div>

      <ProjectDetail project={projects[0]} />

        {/* <div className="projectBox" >
        <div style={{display:"flex", flexDirection:"column"}} className="blue">
        <h3 >{projects[0].title}</h3 >
        <a href={projects[0].vidLink} target="_blank" rel="noreferrer noopener">
      <img onMouseOver={()=>setPlayingReciPlenty(true)} onMouseLeave={()=>setPlayingReciPlenty(false)} src={playingReciPlenty ? projects[0].projectGif : projects[0].projectJpg} alt="ReciPlenty demo" /> 
      </a>
      <div style={{display:"flex", textAlign:"center"}}> {projects[0].lastUpdated}&nbsp;
      <a className="white" href={projects[0].gitRepo} target="_blank" rel="noreferrer noopener">Git Repo.&nbsp;</a>
      <a className="white" href={projects[0].linkedApp} target="_blank" rel="noreferrer noopener" >App.</a>
      </div>
      </div>
      <div className="textBox" >
      {projects[0].description}
        </div>
      </div> */}

      <div className="projectBox" >
        <div style={{display:"flex", flexDirection:"column"}} className="blue">
        <h3 >Death to Dad Jokes</h3 >
        <a href="https://youtu.be/i81w1Ufl2RM" target="_blank" rel="noreferrer noopener">
      <img onMouseOver={()=>setPlayingDTDJ(true)} onMouseLeave={()=>setPlayingDTDJ(false)} src={playingDTDJ ? dtdj : dtdjStill} alt="Death to Dad Jokes demo" />      </a>
      <div style={{display:"flex", textAlign:"center"}}> Completed October, 2021.&nbsp;
       <a className="white" target="_blank" rel="noreferrer noopener" href="https://github.com/ProfessionalMaxJS/DeathToDadJokes">  Git Repo.&nbsp;</a>
      <a className="white" target="_blank" rel="noreferrer noopener" href="https://professionalmaxjs.github.io/DeathToDadJokes">  App.</a>      </div>
      </div>
      <div className="textBox" >
Using HTML, CSS and ("vanilla") Javascript, <a className="white" href="https://github.com/Smith-Reesie" target="_blank" rel="noreferrer noopener"> Maurice Smith</a> and I built this to allow users to cycle through "Dad" Jokes (c/o the "icanazdadjoke" API) and rate them (alongside spoooooky sound effects), keeping a running tally of liked vs disliked. Each new joke is loaded with the user's click of a rating; if (newJoke.includes("?")), then the joke is loaded with the punchline (ie, all text after "?") hidden, and a button is displayed to remind the user of their own complicity in the cringiness.
        </div>
      </div>

      <div className="projectBox" >
        <div style={{display:"flex", flexDirection:"column"}} className="blue">
        <h3 >Chakra Cafe</h3 >
        <a href="https://youtu.be/Q_tBBrbX8oY" target="_blank" rel="noreferrer noopener">
      <img onMouseOver={()=>setPlayingChakra(true)} onMouseLeave={()=>setPlayingChakra(false)} src={playingChakra ? chakra : chakraStill} alt="Chakra Cafe demo" />
      </a>
      <div style={{display:"flex", textAlign:"center"}}> Last Updated January, 2022.&nbsp;
       <a className="white" target="_blank" rel="noreferrer noopener" href="https://github.com/ProfessionalMaxJS/Project_all_in_one">  Git Repo.&nbsp;</a>
      <a className="white" target="_blank" rel="noreferrer noopener" href="https://chakra-cafe.herokuapp.com/">  App.</a>      </div>
      </div>
      <div className="textBox" >
Cafe-type mockup site built with <a className="white" target="_blank" rel="noreferrer noopener" href="https://www.luisalfredoescobar.com/">Luis Escobar</a> to represent the menu offerings and order system from Chakra Cafe (a real, but unafilliated, restaurant in Queens, NY). Uses ruby's bcrypt gem to handle authentication/authorization for accounts. Without accounts, users can only browse the site; with accounts they can place orders after logging in. Although the front end functionality is limited to filling and purchasing from a shopping cart, backend tables are in place to track/provide users with their order history, as well as a points/rewards system (which currently only shows up as an "easter egg" in the console) - for future buildouts
        </div>
      </div>

      <div className="projectBox" id="bottom-bottom" >
        <div style={{display:"flex", flexDirection:"column"}} className="blue">
        <h3 >The Cinema</h3 >
        <a href="https://youtu.be/opGSTxjautA" target="_blank" rel="noreferrer noopener">
      <img onMouseOver={()=>setPlayingCinema(true)} onMouseLeave={()=>setPlayingCinema(false)} src={playingCinema ? cinema : cinemaStill} alt="USS_Rapture demo" />
      </a>
      <div style={{display:"flex", textAlign:"center"}}> Completed September, 2021.&nbsp;
       <a className="white" target="_blank" rel="noreferrer noopener" href="https://github.com/ProfessionalMaxJS/USS_Rapture">  Git Repo.&nbsp;</a>
      <a className="white" target="_blank" rel="noreferrer noopener" href="https://professionalmaxjs.github.io/USS_Rapture/">  App.</a>      </div>
      </div>
      <div className="textBox" >
        My first ever site! Made as an onboarding/pre-class requirement for the FlatIron School, I had some fun with this one. The stylistic accomplishments I'm most proud of are hilighted in the accompanying video (to the left of this text), but in the future I plan to revisit/change the user's popcorn interaction, as well as implement onScroll event listeners to darken the background image (ie, the lights going down at showtime). Details about my experiences building this website were the subject of an early blog post, linked <a style={{fontSize:"1.4rem"}} className="white" target="_blank" rel="noreferrer noopener" href="https://maxees.blogspot.com/2021/10/website-in-development.html">here</a>. The "feature presentation" of this website, a video I made in college, is linked and discussed in greater detail elsewhere in this portfolio, but also available  <a style={{fontSize:"1.4rem"}} className="white" target="_blank" rel="noreferrer noopener" href="https://youtu.be/i11FDMUffMU">here</a>.
      </div>
      </div>

      <Link className="goHome" to="/" >Home</Link>

        </>
    )
}

export default WebExperience;