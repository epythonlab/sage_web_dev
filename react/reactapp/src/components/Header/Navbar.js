// navigation bar defined below
// you are not required to install additional library
// just checkout the css file in nav.css and modify the layout

import React, {useState, useEffect} from 'react'
import { BrowserRouter, Link } from "react-router-dom";
import './nav.css'

export default function Navbar() {
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
      <ul className="list">
      <BrowserRouter>
      <Link to={'/application'}>
        <li className="items">Application</li>
      </Link>
      </BrowserRouter>

        <li className="items">List Applicants</li>
    </ul>
      )}

      <button onClick={toggleNav} className="btn">=</button>
    </nav>
  )
}
