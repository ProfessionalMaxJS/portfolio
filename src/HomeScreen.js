// import glove from './gifs/Max_Glove.png'
import {Link} from 'react-router-dom'

function HomeScreen(){

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
        <a className="white" target="_blank" rel="noreferrer noopener" href="mailto:max@maxees.dev?subject=You're Hired!" >Max@MaxEES.dev</a>
    </div> 
        <div className="inLinks" >
        <Link className="white" to="/AssociatedExperience" >Resume / Other Cool Things </Link>
        <Link className="white" to="/WebExperience">Experience / Projects</Link>    
        </div>

        <div style={{textAlign:"left", margin:"10vh 6vw 12vh 6vw"}}  > &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Welcome to my site! And thanks for stopping by. Here you'll find my collection of projects accomplished for/while-attending the <a className="white" style={{fontSize:"1.3rem"}} target="_blank" rel="noreferrer noopener" href="https://flatironschool.com/courses/coding-bootcamp#/" >FlatIron School</a>'s Software Engineering Program. As proud as I am to have graduated from their first in-person cohort since 2020, I am even more excited to be entering a whole new world of Computer Science. After learning someintroductory Programming in high school, in the following professional years I largely moved away from digital output, focusing instead on agriculture, fermentation and food science. Although I didn't realize it at the time, there has been a consistent theme to this output: I've taken on the pursuits of a maker. What I reacquainted myself with, after I stopped and thought about it, was how creative, and productive, and tangible - and just how much fun - it is to make software. Now that I've found it, there's no turning back. If you think my skills can be put to use on a project you have in mind, please reach out! I look forward to working with you.<br/><br/>Cheers,<br/>-Max  </div>
    </div>
        </>
    )
}

export default HomeScreen;

//I was also fortunate enough to focus on my "first (academic) loves" of American history and sociology, through my years spent traveling the country, living in Oregon, Vermont, and now again in New York. 