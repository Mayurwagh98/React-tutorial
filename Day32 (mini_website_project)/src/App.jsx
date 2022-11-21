
import { Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
     <Navbar />

     <Routes>

      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/service" element={<Service />} />
      <Route exact path="/contact" element={<Contact />} />

     </Routes>
     
     <Footer />
    </div>
  );
}

export default App;
