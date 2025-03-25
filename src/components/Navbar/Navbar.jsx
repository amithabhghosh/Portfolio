import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
export const Navbar = () => {
    const [isOpen,setIsOpen]=useState(false)
    const toggleMenu = () => {
        setIsOpen(!isOpen);
      };
  return (
    <div className='navbar'>
 <div className="logo">Amithabh Ghosh</div>
      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li>
          <Link to={"/"}><a>Home</a></Link>
        </li>
        <li>
            <Link to={"/about"}><a>About</a></Link>
        </li>
        <li>
          <Link to={"/projects"}><a>Projects</a></Link>
        </li>
        <li>
          <Link to={"/contact"}><a>Contact</a></Link>
        </li>
        
      </ul>
      <div className="burger" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </div>
  )
}
