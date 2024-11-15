import React from 'react'
import '../css/nav.css'
import { Link,NavLink } from 'react-router-dom'

function Footer() {
  return (
    <div className='navbar-container nav-blue footer' >
    <nav className='nav-bar px-[15px]  '>

      <div className="navbar-header-container mx-0">
          <button></button>
          <h1 className='nav-brand '>
              <span style={{fontSize:'16px', fontFamily:'sans-serif'}}>© 2015 - 2024 </span>
              <Link style={{textDecoration:'underline'}} >TDEECalculator.net</Link>
              
          </h1>
      </div>

      <div className="nav-links-container">
          <ul className='nav-link-list'>
              <li className='nav-link'><NavLink style={{textDecoration:'underline'}} 
              to={'/terms'}>Terms</NavLink></li>
              <li className='nav-link'><NavLink to={'/privecy'} style={{textDecoration:'underline'}}>Privecy</NavLink></li>
              <li className='nav-link'><NavLink style={{textDecoration:'underline'}} >Contact</NavLink></li>
          </ul>
      </div>
    </nav>
  </div>
  )
}

export default Footer


// i want to keep this footer conatiner at the bottom always , not bottom of the screen but bottom of our html page how can i do it  