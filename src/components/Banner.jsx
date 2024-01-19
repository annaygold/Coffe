import React, { Component } from 'react'
import './BannerStyles.css'

class Banner extends Component {
    render() {
        return (
            <div className='Banner-img'>
                <div className='heading'>
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                </div>
            </div>
        )
    }
}

export default Banner
