import React from 'react'
import SecOne from './Home-SecOne'
import About from './About'
import FeaturedHouses from './FeaturedHouses'
import Services from './Services'
import How from './How'
import Navbar from '../LandingPages/Navbar'

const Homepage = () => {
  return (
    <div className='overflow-x-hidden'>
        <Navbar />
        <SecOne />
        <About />
        <FeaturedHouses />
        <Services />
        <How />
    </div>
  )
}

export default Homepage