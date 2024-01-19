import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'
import {FaTimes} from 'react-icons/fa'
import './NavbarStyles.css'

const Navbar = () => {

    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)



  return (
    <div className='header'>
        <Link to='/'> <h1>STAR AMAZON</h1></Link>
        <ul className={click ? 'nam-menu active' : 'nav-menu'}>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/store'>Store</Link>
            </li>            
            <li>
                <Link to='/new pages'>New Pages</Link>
            </li>            
            <li>
                <Link to='/about'>About</Link>
            </li>            
        </ul>
        <div className='hamburger' onClick={handleClick}>
         {click ? (<FaTimes size={20} style={{color: '#fff'}}/>) : (<FaBars size={20} style={{color: '#fff'}}/>)}
            
        </div>
    </div>
  )
}

export default Navbar