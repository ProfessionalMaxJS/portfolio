import './App.css';
import AssociatedExperience from './AssociatedExperience'
import WebExperience from './WebExperience'
import HomeScreen from './HomeScreen'
import {useState} from 'react'
import { Route, Routes, Link} from 'react-router-dom'


function App() {

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


    <div id="corner" style={{display: "flex"}}>
    <div id="webdeveloper" style={{display: "flex", flexDirection: "column"}} >
    <div style={{display: "flex"}} >
    <div className="hovee">w</div>
    <div className="hovee">e</div>
    <div className="hovee">b</div>
    </div>
    <div style={{display: "flex"}}>
    <div className="hovee">d</div>
    <div className="hovee">e</div>
    <div className="hovee">v</div>
    <div className="hovee">e</div>
    <div className="hovee">l</div>
    </div>
    <div style={{display: "flex"}}>    
    <div className="hovee">o</div>
    <div className="hovee">p</div>
    <div className="hovee">e</div>
    <div className="hovee">r</div>
    </div>
    </div>
    <div id="lines" style={{ display: "flex", flexDirection: "column" }} >
    <hr style={{ transform:"skewY(-4deg)", width:"100px"}} />
    <hr style={{width:"100px"}} />
    <hr style={{width:"100px"}} />
    <hr style={{width:"100px"}} />
    </div>
    <div id="links" style={{display: "flex", flexDirection: "column"}} >
    <div><Link className='white' to="/">Home</Link></div>
    <div><Link className='white' to="/WebExperience" >Web Experience</Link></div>
    <div><Link className='white' to="/AssociatedExperience">Associated Experience</Link></div>
    </div>
    </div>

    </div>
    </>
  );
}

export default App;
