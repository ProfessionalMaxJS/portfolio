// import glove from './gifs/Max_Glove.png'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import NPH from './gifs/NPH.gif'
import NPHstill from './gifs/NPHstill.jpg'

function HomeScreen(){

    const [playingJerry, setPlayingJerry] = useState(false)

    return(
        <>
    {/* <img src={glove} alt="my pretty face" /> */}

    <div className="center" >
    <div style={{paddingTop:"30vh"}} >You did it! You found it! You made it to</div>
    <div id="myNameIs" >MAXEES.DEV</div>
    <div style={{marginBottom:"5vh"}} >the Professional Portfolio of Max E. Engel-Streich</div>
    <div className="inLinks" >
        <a className="white" target="_blank" rel="noreferrer noopener" href="https://youtu.be/3e_Zbiu537g" >Video Intro</a>
        <a className="white" target="_blank" rel="noreferrer noopener" href="http://www.maxees.blogspot.com" >Blog</a>
        <a className="white" target="_blank" rel="noreferrer noopener" href="https://www.GitHub.com/ProfessionalMaxJS" >GitHub</a>
        <a className="white" target="_blank" rel="noreferrer noopener" href="https://www.linkedin.com/in/maxees/" >LinkedIn</a>
    </div> 
        <div className="inLinks" >
        <a className="white" target="_blank" rel="noreferrer noopener" href="mailto:max@maxees.dev?subject=You're Hired!" >Max@MaxEES.dev</a>
        <Link className="white" to="/WebExperience">Experience / Projects</Link>    
        <a className="white" target="_blank" rel="noreferrer noopener" href="https://tinyurl.com/mesWH" >Resume</a>
        </div>

        <div className="blue" style={{textAlign:"center"}}  >
        <div style={{textAlign:"left", margin:"10vh 6vw 12vh 6vw"}}  > &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hi, my name is Max, and I'm a Full Stack developer, specializing in ReactJS and Ruby on Rails. Currently, I'm working on:  </div>
        <a href="https://www.noparticularhours.com" target="_blank" rel="noreferrer noopener">
      <img onMouseOver={()=>setPlayingJerry(true)} onMouseLeave={()=>setPlayingJerry(false)} src={playingJerry ? NPH : NPHstill} alt="No Particular Hours demo" />      </a>
        </div>

    </div>
        </>
    )
}

export default HomeScreen;

//I was also fortunate enough to focus on my "first (academic) loves" of American history and sociology, through my years spent traveling the country, living in Oregon, Vermont, and now again in New York. 