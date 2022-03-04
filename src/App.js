import './App.css';
import AssociatedExperience from './AssociatedExperience'
import WebExperience from './WebExperience'
import HomeScreen from './HomeScreen'
import {useState} from 'react'
import { useNavigate, Route, Routes} from 'react-router-dom'


function App() {

  const paginate = useNavigate()
  const [home, setHome] = useState(false)
  const [web, setWeb] = useState(false)
  const [assoc, setAssoc] = useState(false)

  return (
    <>
    <div className="App-header">
<Routes>
  <Route path="/" element={<HomeScreen />} />
  <Route path="/AssociatedExperience" element={<AssociatedExperience />} />
  <Route path="/WebExperience" element={<WebExperience />} />
</Routes>


    <div id="corner" style={{position:"fixed", bottom: "0px", left: "0px", display: "flex", color: "black"}}>
    <div id="webdeveloper" style={{display: "flex", flexDirection: "column", backgroundColor:"#D3D3D3" /*, maxWidth: "10%"*/}} >
    
    <div id="web" style={{display: "flex"}} >
    <div className="hovee">w</div>
    <div className="hovee">e</div>
    <div className="hovee" id="bio" onClick={()=>paginate("/")} onMouseOver={()=>setHome(true)} onMouseLeave={()=>setHome(false)} >b</div>
    </div>
   
    <div id="deve" style={{display: "flex"}}>
    <div className="hovee">d</div>
    <div className="hovee">e</div>
    <div className="hovee">v</div>
    <div className="hovee" id="experience" onClick={()=>paginate("/WebExperience")} onMouseOver={()=>setWeb(true)} onMouseLeave={()=>setWeb(false)} >e</div>
    </div>
    <div id="loper" style={{display: "flex"}}>    
    <div className="hovee">l</div>
    <div className="hovee">o</div>
    <div className="hovee">p</div>
    <div className="hovee">e</div>
    <div className="hovee" id="resume" onClick={()=>paginate("/AssociatedExperience")} onMouseOver={()=>setAssoc(true)} onMouseLeave={()=>setAssoc(false)} >r</div>
    </div>
    </div>

    <div id="links" style={{ display: "flex", alignItems: "stretch", flexDirection: "column", backgroundColor:"#D3D3D3"}} >
  
  {home && <div id="home" style={{display: "flex"}}>
    <hr style={{ transform:"skewY(-4deg)", width:"100px"}} />
    <div><div className='white' to="/">Bio / Contact</div></div>
 </div>}
    
  {web && <div style={{display:"flex"}} >
    <div className="white" style={{display:"flex", flexDirection:"column", textAlign: "center"}}>
    <div>~</div> <div style={{display:"flex" }}  className='white'> 
    <hr style={{width:"100px", height:"1px", alignItems:'center'}} />
     Experience / Projects</div><div>~</div>
    </div>
    </div>}

  {assoc && <div style={{display:"flex"}} >
    <hr style={{width:"100px", transform:"skewY(-40deg)"}} />
    <div><div className='white' to="/AssociatedExperience">Resume / Other Cool Things</div></div>
    </div>}

    </div>

    </div>

    </div>
    </>
  );
}

export default App;
