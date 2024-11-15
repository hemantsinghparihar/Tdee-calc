import React, {useState} from 'react'
import { Link,NavLink } from 'react-router-dom'
import '../css/nav.css'

function Header() {
  const [isOpen,setIsOpen]=useState(false)

  return (
    <div className='navbar-container nav-blue'>
      <nav className='nav-bar px-[15px]  '>

        <div className="navbar-header-container mx-0">
            
            <h1 className='nav-brand '>
                <Link style={{textDecoration:'none'}}>TDEE</Link>
                <span>Calculator</span>
            </h1>
            <button onClick={()=>{setIsOpen(!isOpen)}}><i class="ri-menu-line"></i></button>
        </div>

        <div className={`nav-links-container ${isOpen ? 'active' : ''}`} onClick={()=>{setIsOpen(!isOpen)}}>
            <ul className='nav-link-list'>
                <li className='nav-link'><NavLink  to={'/about'}>About</NavLink></li>
                <li className='nav-link'><NavLink to={'/faq'}>FAQ</NavLink></li>
                <li className='nav-link'><NavLink to={'/contact'}>Contact</NavLink></li>
            </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header
