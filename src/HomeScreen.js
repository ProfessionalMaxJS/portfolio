// import glove from './gifs/Max_Glove.png'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import Tallies from './gifs/Tallies.gif'
import TalliesStill from './gifs/TalliesStill.jpg'

function HomeScreen(){

    const [playingTallies, setPlayingTallies] = useState(false)

    return(
        <>
    {/* <img src={glove} alt="my pretty face" /> */}

    <div className="center" >
    <div style={{paddingTop:"30vh"}} >You did it! You found it! You made it to</div>
    <div id="myNameIs" >MAXEES&#x2e;DEV</div>
    <div style={{marginBottom:"5vh"}} >the Professional Portfolio of Max E. Engel-Streich</div>
    <div className="inLinks" >
        <a className="white" target="_blank" rel="noreferrer noopener" href="https://youtu.be/3e_Zbiu537g" >Video Intro</a>
        <a className="white" target="_blank" rel="noreferrer noopener" href="http://www.maxees.blogspot.com" >Blog</a>
        <a className="white" target="_blank" rel="noreferrer noopener" href="https://www.GitHub.com/ProfessionalMaxJS" >GitHub</a>
        <a className="white" target="_blank" rel="noreferrer noopener" href="https://www.linkedin.com/in/maxees/" >LinkedIn</a>
        <a className="white" target="_blank" rel="noreferrer noopener" href="https://tinyurl.com/max-beerclass" >Take my Beer Brewing Class!</a>
    {/* </div> 
        <div className="inLinks" > */}
        <a className="white" target="_blank" rel="noreferrer noopener" href="mailto:max@maxees.dev?subject=You're Hired!" >Max@MaxEES.dev</a>
        <Link className="white" to="/WebExperience">Projects</Link>    
        <a className="white" target="_blank" rel="noreferrer noopener" href="https://tinyurl.com/maxeesResume" >Resume</a>
        </div>

        <div id="homePageProject" className="blue"  >
        <div style={{textAlign:"left", margin:"10vh 0vw 12vh 0vw"}}  > &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hi, my name is Max, and I'm a Full Stack developer, specializing in ReactJS and Ruby on Rails. Currently, I'm working on:  </div>
        <div >
        <a href="https://www.npmjs.com/package/tallies" target="_blank" rel="noreferrer noopener">
      <img onMouseOver={()=>setPlayingTallies(true)} onMouseLeave={()=>setPlayingTallies(false)} src={playingTallies ? Tallies : TalliesStill} alt="BlueApron.com screencap" />      </a>
        </div>
        </div>

    </div>
        </>
    )
}

export default HomeScreen;
