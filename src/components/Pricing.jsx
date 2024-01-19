import React from 'react'
import {Link} from 'react-router-dom'
import './PricingStyles.css'

import a from '../assets/a.jpg'
import b from '../assets/b.webp'
import c from '../assets/c.png'
import d from '../assets/d.png'
import e from '../assets/e.jpg'
import f from '../assets/f.webp'
import g from '../assets/g.jpg'
import h from '../assets/h.jpg'


const Pricing = () => {
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
                <div className='card'>
                    <h3>- Robusta -</h3>
                    <img src={d} className='img' alt='' />
                    <span className='bar'></span>
                    <p>- Dark Roast -</p>
                    <p>- Sweet -</p>
                    <p>- Smooth -</p>
                    <p>- High Caffeine -</p>
                    <p>- $ 30 -</p>
                    <Link to='/contact' className='btn'>Buy Now</Link>
                </div>
                <div className='card'>
                    <h3>- Robusta -</h3>
                    <img src={e} className='img' alt='' />
                    <span className='bar'></span>
                    <p>- Medium Roast -</p>
                    <p>- Mild Sour -</p>
                    <p>- Smooth -</p>
                    <p>- High Caffine -</p>
                    <p>- $ 30 -</p>
                    <Link to='/contact' className='btn'>Buy Now</Link>
                </div>
                <div className='card'>
                    <h3>- Robusta -</h3>
                    <img src={f} className='img' alt='' />
                    <img src=''/>
                    <span className='bar'></span>
                    <p>- Light Roast -</p>
                    <p>- Sweet -</p>
                    <p>- Sour -</p>
                    <p>- High Cafaine -</p>
                    <p>- $ 30 -</p>
                    <Link to='/contact' className='btn'>Buy Now</Link>
                </div>
                <div className='card'>
                    <h3>- Liberica -</h3>
                    <img src={g} className='img' alt='' />
                    <span className='bar'></span>
                    <p>- Dark Roast -</p>
                    <p>- Sweet -</p>
                    <p>- Smooth -</p>
                    <p>- High Caffeine -</p>
                    <p>- $ 30 -</p>
                    <Link to='/contact' className='btn'>Buy Now</Link>
                </div>
                <div className='card'>
                    <h3>- Liberica -</h3>
                    <img src={h} className='img' alt='' />
                    <span className='bar'></span>
                    <p>- Medium Roast -</p>
                    <p>- Mild Sour -</p>
                    <p>- Smooth -</p>
                    <p>- High Caffine -</p>
                    <p>- $ 30 -</p>
                    <Link to='/contact' className='btn'>Buy Now</Link>
                </div>
                <div className='card'>
                    <h3>- Liberica -</h3>
                    <img src={a} className='img' alt='' />
                    <img src=''/>
                    <span className='bar'></span>
                    <p>- Light Roast -</p>
                    <p>- Sweet -</p>
                    <p>- Sour -</p>
                    <p>- High Cafaine -</p>
                    <p>- $ 30 -</p>
                    <Link to='/contact' className='btn'>Buy Now</Link>
                </div>
            </div>
        </div>
    )
}

export default Pricing
