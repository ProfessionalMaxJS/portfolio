// import glove from './gifs/Max_Glove.png'

function HomeScreen(){

    return(
        <>
    {/* <img src={glove} alt="my pretty face" /> */}

    <div className="center" >
    <div>You did it! You found it! You made it to</div>
    <div id="myNameIs" >MAXEES.DEV</div>
    <div style={{marginBottom:"8vh"}} >the Professional Portfolio of Max E. Engel-Streich</div>
    <div style={{fontSize:"2.5rem"}} >
        <a className="white" target="_blank" rel="noreferrer noopener" href="https://youtu.be/3e_Zbiu537g" >Video Intro&nbsp;&nbsp;&nbsp;</a>
        <a className="white" target="_blank" rel="noreferrer noopener" href="http://www.maxees.blogspot.com" >Blog&nbsp;&nbsp;&nbsp;</a>
        <a className="white" target="_blank" rel="noreferrer noopener" href="https://www.GitHub.com/ProfessionalMaxJS" >GitHub&nbsp;&nbsp;&nbsp;</a>
        <a className="white" target="_blank" rel="noreferrer noopener" href="https://www.linkedin.com/in/maxees/" >LinkedIn&nbsp;&nbsp;&nbsp;</a>
        <a className="white" target="_blank" rel="noreferrer noopener" href="mailto:max@maxees.dev?subject=You're Hired!" >Email&nbsp;&nbsp;&nbsp;</a>
    </div> 
    </div>
        </>
    )
}

export default HomeScreen;