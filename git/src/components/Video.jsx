import React from 'react'
import { Link } from 'react-router-dom'
import './VideoStyles.css'

import coffeeVideo from '../assets/coffeeVideo.mp4'

const Video = () => {
  return (
    <div className='hero'>
        <video autoPlay loop muted id='video'>
            <source src={coffeeVideo} type='video/mp4'/>
        </video>
    <div className='content'>
        <h1>Coffee1</h1>
        <p>Coffee2</p>

    <div>
        <Link to='/store' className='btn btn-light'>Store</Link>
        <Link to='/new pages' className='btn btn-light'>New Pages</Link>
    </div>
    </div>
    </div>
  )
}

export default Video