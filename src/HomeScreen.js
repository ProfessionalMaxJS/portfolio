// import glove from './gifs/Max_Glove.png'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import BA from './gifs/BA.gif'
import BAstill from './gifs/BAstill.jpg'

function HomeScreen(){

    const [playingBA, setPlayingBA] = useState(false)

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
    {/* </div> 
        <div className="inLinks" > */}
        <a className="white" target="_blank" rel="noreferrer noopener" href="mailto:max@maxees.dev?subject=You're Hired!" >Max@MaxEES.dev</a>
        <Link className="white" to="/WebExperience">Experience / Projects</Link>    
        <a className="white" target="_blank" rel="noreferrer noopener" href="tinyurl.com/mes-resume" >Resume</a>
        </div>

        <div id="homePageProject" className="blue"  >
        <div style={{textAlign:"left", margin:"10vh 0vw 12vh 0vw"}}  > &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hi, my name is Max, and I'm a Full Stack developer, specializing in ReactJS and Ruby on Rails. Currently, I'm working on:  </div>
        <div >

        <a href="https://www.blueapron.com" target="_blank" rel="noreferrer noopener">
      <img onMouseOver={()=>setPlayingBA(true)} onMouseLeave={()=>setPlayingBA(false)} src={playingBA ? BA : BAstill} alt="BlueApron.com screencap" />      </a>
        </div>
        </div>

    </div>
        </>
    )
}

export default HomeScreen;
