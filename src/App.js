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

    <div id="webdeveloper" style={{ position:"fixed", bottom: "0px", left: "0px", color: "black", display: "flex", flexDirection: "column", backgroundColor:"#D3D3D3", paddingRight:"1vmin" /*, maxWidth: "10%"*/}} >
    
    <div id="web" style={{display: "flex"}} >
    <div>w</div><div>e</div>
    <div className="hovee" id="bio" onClick={()=>paginate("/")} onMouseOver={()=>setHome(true)} onMouseLeave={()=>setHome(false)} >b 
    {home&&
     <span> => Bio / Contact</span>}
    </div>
    </div>
   
    <div id="deve" style={{display: "flex"}}>
    <div>d</div><div>e</div><div>v</div>
    <div className="hovee" id="experience" onClick={()=>paginate("/WebExperience")} onMouseOver={()=>setWeb(true)} onMouseLeave={()=>setWeb(false)} >e 
     {web&&
     <span > => Experience / Projects</span>}
     </div>
    
    </div>
    <div id="loper" style={{display: "flex"}}>    
    <div>l</div><div>o</div><div>p</div><div>e</div>
    <div className="hovee" id="resume" onClick={()=>paginate("/AssociatedExperience")} onMouseOver={()=>setAssoc(true)} onMouseLeave={()=>setAssoc(false)} >r 
    {assoc&&
     <span > => Resume / Other Cool Things</span>}
    </div>
    </div>
    </div>

    {/* <div id="links" style={{ display: "flex", alignItems: "stretch", flexDirection: "column", backgroundColor:"#D3D3D3"}} >
  
  {home && <div id="home" style={{display: "flex"}}>
    <hr style={{ transform:"skewY(-4deg)", width:"100px"}} />
    <div><div className='white' to="/">Bio / Contact</div></div>
 </div>}
    
  {web && <div>
    <div className="white" style={{display:"flex", flexDirection:"column", textAlign: "center"}}>
    <div style={{ position:"absolute", top:"50%", transform:"translateY(-50%)"}} >  
    <hr style={{width:"100px", height:"1px", alignItems:'center'}} /> 
     Experience / Projects</div>
    </div>
    </div>}

  {assoc && <div style={{display:"flex"}} >
    <hr style={{width:"100px", transform:"skewY(-40deg)"}} />
    <div><div className='white' to="/AssociatedExperience">Resume / Other Cool Things</div></div>
  </div> */}

    </div>
    </>
  );
}

export default App;
