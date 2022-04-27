import { useState } from 'react';

function ProjectDetail({project}){

const [playing, setPlaying] = useState(false)

return(
    <>
    <div className="projectBox" >
        <div style={{display:"flex", flexDirection:"column"}} className="blue">
        <h3 >{project.title}</h3 >
        <a href={project.vidLink} target="_blank" rel="noreferrer noopener">
      <img onMouseOver={()=>setPlaying(true)} onMouseLeave={()=>setPlaying(false)} src={playing ? project.projectGif : project.projectJpg} alt="demo video" /> 
      </a>
      <div style={{display:"flex", textAlign:"center"}}> {project.lastUpdated}&nbsp;
      <a className="white" href={project.gitRepo} target="_blank" rel="noreferrer noopener">Git Repo.&nbsp;</a>
      <a className="white" href={project.linkedApp} target="_blank" rel="noreferrer noopener" >App.</a>
      </div>
      </div>
      <div className="textBox" >
      {project.description}
      &nbsp;<a style={{fontSize:"1.4rem"}} className="white" target="_blank" rel="noreferrer noopener" href={project.collaboratorURL}>{project.collaborator}</a>&nbsp;
      {project.descriptionPtII}
        </div>
      </div>
    </>
)
}

export default ProjectDetail;