import React from 'react'
import Footer from '../components/Footer'
import HeroImage from '../components/Banner'
import Navbar from '../components/Navbar'
import TrainingSection from '../components/News'

const Training = () => {
    return (
        <div>
            <Navbar />
            <HeroImage heading='News.' text='We are acepting new Barista' />
            <TrainingSection />
            <Footer />
        </div>
    )
}

export default Training
