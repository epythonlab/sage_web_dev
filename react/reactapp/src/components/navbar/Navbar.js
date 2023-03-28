// navigation bar defined below
// you are not required to install additional library
// just checkout the css file in nav.css and modify the layout

import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import './nav.css'


function Navbar() {

  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  useEffect(() =>{
    document.title = 'Sage Application'
  })
  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
        window.removeEventListener('resize', changeWidth)
    }

  }, [])
 
  return (
    <nav>
      {(toggleMenu || screenWidth > 500) && (
        <ul className ='list'>
          <li className='items'>
            <Link className='link' to="/new-applicant">New Applicant</Link>
          </li>
          <li className='items'>
            <Link className='link' to="/">Show Applicants</Link>
          </li>
        </ul>
      )}
      <button onClick={toggleNav} className="btn">=</button>
    </nav>
  );
}
export default Navbar;