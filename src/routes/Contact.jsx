import React from 'react'
import Footer from '../components/Footer'
import HeroImage from '../components/Banner'
import Navbar from '../components/Navbar'
import Form from '../components/Form'

const Contact = () => {
    return (
        <div>
            <Navbar />
            <HeroImage heading='CONTACT.' text='Contact STAR AMAZON' />
            <Form />
            <Footer/>
        </div>
    )
}

export default Contact
