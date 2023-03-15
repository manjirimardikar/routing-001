import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export const Navbar = () => {
  return (
    <div className='navbar-container'>
        <div className="headercontactdetails">
          <p>0509418224</p>
          <p> enquiry@urbansciencemep.com</p>


        </div>
        <div className="navbar">
        <div className="logo">
          <img src="https://www.urbansciencemep.com/_next/static/images/blackLogo-10fc2f582f155efcc2c792a97edc1f33.png" alt="" />

        </div>
        <div className="navbar-content">
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/blog'>Blog</Link>
            <Link to='/contact-us'>Contact</Link>




        </div>
        <div className="enquiry">
            <button className='campany-btn'>Enquiry Now</button>
        </div>

        </div>

        

    </div>
  )
}