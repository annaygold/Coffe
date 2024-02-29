import React from 'react'
import './NewsStyles.css'

import {Link} from 'react-router-dom'

import latte from '../assets/latte.jpg'
import press from '../assets/press.jpg'

const News = () => {
    return (
        <div className='training'>
            <div className='left'>
                <h1>Training</h1>
                <p>Thorough training is a necessity to master the art of barista. We offer all inclusive training for everyone who is interested.</p>
                <Link to='/contact'><button className='btn'>Contact</button></Link>
            </div>
            <div className='right'>
                <div className='img-container'>
                    <div className='image-stack top'>
                        <img src={latte} className='img' alt='' />
                    </div>
                    <div className='image-stack bottom'>
                        <img src={press} className='img' alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News
