import { Route, Routes, useLocation } from 'react-router-dom';

import './App.css';
import { About } from './Components/About';
import { Blog } from './Components/Blog';
import { Contact } from './Components/Contact';
import { Home } from './Components/Home';
import { Navbar } from './Components/Navbar';
import { Projects } from './Components/Projects';


function App() {

  const location = useLocation()

  return (
    <div className="app">
       {location.pathname !== '/blog' && <Navbar />}
      <Routes>

        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/projects' element={<Projects />}></Route>
        <Route path='/contact-us' element={<Contact />}></Route>
        <Route path='/blog' element={<Blog />}></Route>

    
      </Routes>

     
  
    </div>
  );
}

export default App;