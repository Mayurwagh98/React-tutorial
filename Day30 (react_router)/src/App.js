import { About } from './Components/About';
import { Contact } from './Components/Contact';
// import { Error } from './Components/Error';
import './App.css';
import { Navbar } from './Components/Navbar';
// import {Routes,  Route} from "react-router-dom"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {User} from "./Components/User"

function App() {

  let Name = () =>{

    return <h1>Name page</h1>
  }

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
          
          {/* <Route exact path="/" element={<About name="About" />}  />  passing props to make page heading dynamic*/} //pass
          <Route exact path="/" element={<About />}  />
          <Route exact path="/contact" element={<Contact />}  />
          <Route path='/contact/Name' element={<Name />} />
          <Route path='/user' element={<User />}>
            <Route path='/user/:fname' element={<User />} />
          </Route>
           {/* using params here, :fname is a  param*/}
          {/* <Route element={<Error />}  /> */}
        
        </Routes>

    </Router>
        
    </>
  );
}

export default App;
