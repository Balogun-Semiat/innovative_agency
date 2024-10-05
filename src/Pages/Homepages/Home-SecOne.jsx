import React from 'react'
import Navbar from '../LandingPages/Navbar'
import { Carousel} from "antd"
import { Outlet , Link} from 'react-router-dom'
import Button from '../Button'
import photo from "../../img/OIP.jpeg"
import photo2 from "../../img/photo2.jpeg"
import finehouse from "../../img/finehouse.jpg"
import housess from "../../img/housess.jpg"


const SecOne = () => {
  return (
    <div className=''>
        <div color='text-2xl text-center flex items-center content-center'>
        <marquee behavior=""  direction="left">Welcome to Innovative House Agency. Find Your Dream Property – Buy, Sell, and Connect with Ease.</marquee>
        </div>

        <div className='flex flex-col lg:flex-row gap-5 h-fit lg:h-[80vh] bg-gray-200 items-center'>
            <div className='w-full lg:w-1/2 text-blue-950 p-10 lg:pl-10 lg:px-16' 
            data-aos='fade-right'
            >
               <h1 className='text-2xl md:text-5xl font-semibold'>Find Your Dream Home with Ease</h1>
               <p className='text-xl mt-5'>Explore thousands of properties tailored to your needs. Whether you’re buying, selling, or renting, we’re here to help.</p>
               <div className='flex gap-3'>
               <Button 
               innertext={"Search for properties"}
               className={"rounded-lg p-2 mt-5 bg-blue-950 text-white text-sm md:text-xl"}/>
               <Button 
               innertext={"Post a property"}
               className={"rounded-lg p-2 mt-5 bg-blue-950 text-white text-sm md:text-xl"}/>
               
               </div>
            </div>
           <div className='w-full h-[50vh] lg:h-full lg:w-1/2 bg-red-200' 
           data-aos='fade-left'
           >
           <Carousel autoplay arrows dotPosition="bottom" infinite={false} className=''>
            <div className=''>
                <img src={housess} alt=""
                className='h-[50vh] lg:h-[80vh] ' />
            </div>
            <div>
                <img src={photo2} alt=""
                className='h-[50vh] lg:h-[80vh]' />
            </div>
            <div>
                <img src={finehouse} alt=""
                className='h-[50vh] lg:h-[80vh] w-full' />
            </div>
            <div>
                <img src={photo} alt=""
                className='h-[50vh] lg:h-[80vh]' />
            </div>
            </Carousel>
            
           </div>
        </div>
    </div>
  )
}

export default SecOne