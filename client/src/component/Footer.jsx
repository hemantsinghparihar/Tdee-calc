import React from 'react'
import '../css/nav.css'
import { Link,NavLink } from 'react-router-dom'

function Footer() {
  return (
    <div className='navbar-container nav-blue footer' style={{marginBottom:'0',position:'fixed',bottom:'0',left:'0',width:'100%' }}>
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
              <li className='nav-link'><NavLink style={{textDecoration:'underline'}} >Terms</NavLink></li>
              <li className='nav-link'><NavLink style={{textDecoration:'underline'}}>Privecy</NavLink></li>
              <li className='nav-link'><NavLink style={{textDecoration:'underline'}} >Contact</NavLink></li>
          </ul>
      </div>
    </nav>
  </div>
  )
}

export default Footer
