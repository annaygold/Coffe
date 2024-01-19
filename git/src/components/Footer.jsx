import React from 'react'
import './FooterStyles.css'
import { FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaSearchLocation size={20} style={{color: '#ffffff', marginRight: '2rem'}} />
                    <div>
                        <p>Ladkrabang</p>
                        <h4>Bangkok </h4>
                    </div>
                </div>
                <div className='phone'>
                    <h4><FaPhone size={20} style={{color: '#ffffff', marginRight: '2rem'}}/> 02-123-5543</h4>
                </div>
                <div className='email'>
                    <h4><FaMailBulk size={20} style={{color: '#ffffff', marginRight: '2rem'}}/>StarAmazon@gmail.com</h4>
                </div>
            </div>
        <div className='right'>
            <h4>About Us</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               Vestibulum in feugiat nibh, sit amet gravida justo. 
               Sed ac porta libero, vel posuere neque. Suspendisse 
               pellentesque pharetra augue sit amet iaculis.</p>
            <div className='social'>
                <FaFacebook size={30} style={{color: '#ffffff', marginRight: '1rem'}}/>
                <FaTwitter size={30} style={{color: '#ffffff', marginRight: '1rem'}}/>
                <FaLinkedin size={30} style={{color: '#ffffff', marginRight: '1rem'}}/>
            </div>
        </div> 
        </div>
    </div>
  )
}

export default Footer