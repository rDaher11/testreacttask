import React from 'react'
import {Link} from "react-router-dom";
import "./NavBar.css"; 


function NavBar() {
  return (
    <>
    <div className="NavBar">
    <Link to="/Home">Home</Link>
    <Link to="/About">About</Link>
    <Link to="/Portfolio">Portfolio</Link>
    <Link to="/ContactUs">Contact-Us</Link>
    </div>
    </>
  )
}

export default NavBar