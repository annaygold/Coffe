import React from 'react'
import { Link } from 'react-router-dom'
import './VideoStyles.css'

import coffeeVideo from '../assets/coffeeVideo.mp4'

const Video = () => {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={coffeeVideo} type='video/mp4' />
            </video>
            <div className='content'>
                <h1>Galaxy. Travel.</h1>
                <p>World's first civilian space travel.</p>
                <div>
                    <Link to='/news' className='btn'>News</Link>
                    <Link to='/pricing' className='btn btn-light'>Buy Now</Link>
                </div>
            </div>
        </div>
    )
}

export default Video
