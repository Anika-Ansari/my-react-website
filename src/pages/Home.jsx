import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Features from '../components/Features'

function Home() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Features/>
        <Footer/>
    </div>
  )
}

export default Home