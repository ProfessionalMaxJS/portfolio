// import glove from './gifs/Max_Glove.png'

function HomeScreen(){

    return(
        <>
    {/* <img src={glove} alt="my pretty face" /> */}

    <div className="center" >
    <div>You did it! You found it! You made it to</div>
    <div id="myNameIs" >MAXEES.DEV</div>
    {/* <div>Now...Hire Me?</div> */}
    <div>
        <a className="white" target="_blank" rel="noreferrer noopener" href="https://tinyurl.com/mesVIDINTRO" >Video Intro </a>
        <a className="white" target="_blank" rel="noreferrer noopener" href="http://www.maxees.blogspot.com" >Blog </a>
        <a className="white" target="_blank" rel="noreferrer noopener" href="https://www.GitHub.com/ProfessionalMaxJS" >GitHub </a>
        <a className="white" target="_blank" rel="noreferrer noopener" href="https://www.linkedin.com/in/maxees/" >LinkedIn </a>
        <a className="white" target="_blank" rel="noreferrer noopener" href="mailto:max@maxees.dev?subject=You're Hired!" >Email </a>
    </div> 
    </div>
        </>
    )
}

export default HomeScreen;