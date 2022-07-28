import {React, useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/Navbar.css';
import {MdOutlineReorder} from 'react-icons/md'

const Navbar = () => {
    const [ext, setExt] = useState(false)
    const toggHandler = () => { 
        setExt((prev) => !prev) 
     }
  return (
    <div className='navbar' id={ext ? 'open' : 'close'}>
        <div className='btn'>
            <button onClick={toggHandler}><MdOutlineReorder/></button>
            </div>
        <div className='links'>
            <Link to='/' onClick={() => setExt(false)}>Home</Link>
            <Link to='/tut' onClick={() => setExt(false)}>Tut</Link>
            <Link to='/ramesses 'onClick={() => setExt(false)}>Ramesses</Link>
            <Link to='/Thutmose' onClick={() => setExt(false)}>Thutmose</Link>
            <Link to='/nefertiti' onClick={() => setExt(false)}>Nefertiti</Link>
            <Link to='/hatshepsut' onClick={() => setExt(false)}>Hatshepsut</Link>
            <Link to='/akhenaten' onClick={() => setExt(false)}>Akhenaten </Link>
        </div>
    </div>
  )
}

export default Navbar