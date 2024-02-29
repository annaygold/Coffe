import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Video from '../components/Video'
import HomePricing from '../components/HomePricing'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Video />
            <HomePricing/>
            <Footer />
        </div>
    )
}

export default Home
