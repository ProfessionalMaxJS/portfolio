import './App.css';
import AssociatedExperience from './AssociatedExperience'
import UnrelatedExperience from './UnrelatedExperience'
import WebExperience from './WebExperience'
import HomeScreen from './HomeScreen'
import { Route, Routes, Link} from 'react-router-dom'


function App() {

  // const aE = useNavigate()
  // const handleAE = () =>{
  //   aE("/AssociatedExperience")
  // }

  return (
    <>
    <div className="App-header">
<Routes>
  <Route path="/" element={<HomeScreen />} />
  <Route path="/AssociatedExperience" element={<AssociatedExperience />} />
  <Route path="/UnrelatedExperience" element={<UnrelatedExperience />} />
  <Route path="/WebExperience" element={<WebExperience />} />
</Routes>

    <Link className='white' to="/">Home</Link>    
     <Link className='white' to="/WebExperience" >Web Experience</Link>
     <Link className='white' to="/AssociatedExperience">Associated Experience</Link>
     <Link className='white' to="/UnrelatedExperience">Unrelated Experience</Link>      

      {/* <p>
      w<br />
      e<br />
      b<br />
      d<br />
      e<br />
      v<br />
      e<br />
      l<br />
      o<br />
      p<br />
      e<br />
      r<br />
      </p>*/} 
    </div>
    </>
  );
}

export default App;
