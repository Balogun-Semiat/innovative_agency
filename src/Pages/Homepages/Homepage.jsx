import React, { useState, useEffect } from 'react'
import SecOne from './Home-SecOne'
import About from './About'
import FeaturedHouses from './FeaturedHouses'
import Services from './Services'
import How from './How'
import Navbar from '../LandingPages/Navbar'
import Loader from '../Loader';

const Homepage = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
        setLoading(false)
    }, 1000);
}, [])

  if(loading) {
    return <Loader />
  }
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