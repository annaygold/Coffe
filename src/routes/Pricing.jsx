import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PricingCards from '../components/Pricing'
import HeroImage from '../components/Banner'

const Pricing = () => {
    return (
        <div>
            <Navbar />
            <HeroImage heading='PRICING.' text='Choose your beans to your taste' />
            <PricingCards />
            <Footer />
        </div>
    )
}

export default Pricing
