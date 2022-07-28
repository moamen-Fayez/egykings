import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import { React } from 'react';
import Navbar from './pages/Navbar';
import  Home from './pages/Home';
import Tut from './pages/Tut' 
import Akhenaten from './pages/Akhenaten' 
import Hatshepsut from './pages/Hatshepsut';
import Nefertiti from './pages/Nefertiti';
import Ramesses from './pages/Ramesses';
import Thutmose from './pages/Thutmose';
import Footer from './pages/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/tut' element={<Tut/>}/>
          <Route path='/ramesses' element={<Ramesses/>}/>
          <Route path='/nefertiti' element={<Nefertiti/>}/>
          <Route path='/thutmose' element={<Thutmose/>}/>
          <Route path='/akhenaten' element={<Akhenaten/>}/>
          <Route path='/hatshepsut' element={<Hatshepsut/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
