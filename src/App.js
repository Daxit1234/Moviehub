import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import About from './component/About';
import Contact from './component/Contact';
import Login from './component/Login';
import Singin from './component/Singin';
function App() {
  return (
    <>
       <Router>
        <Navbar/>
        <Routes>
           <Route exact path='/' element={<Home/>} />
           <Route exact path='/about' element={<About/>} />
           <Route exact path='/contact' element={<Contact/>} />
           <Route exact path='/login' element={<Login/>} />
           <Route exact path='/singin' element={<Singin/>} />
        </Routes>
       </Router>
    </>
  );
}

export default App;
