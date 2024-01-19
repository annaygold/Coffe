import React from 'react'
import './HomePricingStyles.css'
import {Link} from 'react-router-dom'

import a from '../assets/a.jpg'
import b from '../assets/b.webp'
import c from '../assets/c.png'

const HomePricing = () => {
  return (
    <div className='pricing'>
            <div className='card-container'>
                <div className='card'>
                    <h3>- Arabica -</h3>
                    <img src={a} className='img' alt='' />
                    <span className='bar'></span>
                    <p>- Dark Roast -</p>
                    <p>- Sweet -</p>
                    <p>- Smooth -</p>
                    <p>- High Caffeine -</p>
                    <p>- $ 30 -</p>
                    <Link to='/contact' className='btn'>Buy Now</Link>
                </div>
                <div className='card'>
                    <h3>- Arabica -</h3>
                    <img src={b} className='img' alt='' />
                    <span className='bar'></span>
                    <p>- Medium Roast -</p>
                    <p>- Mild Sour -</p>
                    <p>- Smooth -</p>
                    <p>- High Caffine -</p>
                    <p>- $ 30 -</p>
                    <Link to='/contact' className='btn'>Buy Now</Link>
                </div>
                <div className='card'>
                    <h3>- Arabica -</h3>
                    <img src={c} className='img' alt='' />
                    <img src=''/>
                    <span className='bar'></span>
                    <p>- Light Roast -</p>
                    <p>- Sweet -</p>
                    <p>- Sour -</p>
                    <p>- High Cafaine -</p>
                    <p>- $ 30 -</p>
                    <Link to='/contact' className='btn'>Buy Now</Link>
                </div>
                <Link to='/pricing'><button className='btn'>More</button></Link>
            </div>
        <div/>
    </div>
    )
}

export default HomePricing