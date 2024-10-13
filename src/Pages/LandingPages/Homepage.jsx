import React from 'react';
import Navbar from './Navbar';
import SecOne from './LandingPage';
import { useSelector } from 'react-redux';

const Homepage = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  console.log("auth", isAuthenticated)

  return (
    <div className='overflow-y-hidden'>
        <SecOne />
    </div>
  )
}

export default Homepage