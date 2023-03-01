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
import Movie from './component/Movie';
import Movietime from './component/Movietime';
import Movieseat from './component/Movieseat';
import Payment from './component/Payment';
import Feedback from './component/Feedback';
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
           <Route exact path='/movies' element={<Movie/>} />
           <Route exact path='/movietime' element={<Movietime/>} />
           <Route exact path='/movieseat' element={<Movieseat/>} />
           <Route exact path='/payment' element={<Payment/>} />
           <Route exact path='/feedback' element={<Feedback/>} />
        </Routes>
       </Router>
    </>
  );
}

export default App;
