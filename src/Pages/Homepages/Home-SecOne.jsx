import React from 'react'
import Navbar from '../LandingPages/Navbar'
import { Carousel} from "antd"
import { Outlet , Link} from 'react-router-dom'
import Button from '../Button'

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
               <h1 className='text-5xl font-semibold'>Find Your Dream Home with Ease</h1>
               <p className='text-xl mt-5'>Explore thousands of properties tailored to your needs. Whether you’re buying, selling, or renting, we’re here to help.</p>
               <div className='flex gap-3'>
               <Button 
               innertext={"Search for properties"}
               className={"rounded-lg p-3 mt-5 bg-blue-950 text-white text-xl"}/>
               <Button 
               innertext={"Post a property"}
               className={"rounded-lg p-3 mt-5 bg-blue-950 text-white text-xl"}/>
               
               </div>
            </div>
           <div className='w-full h-[50vh] lg:h-full lg:w-1/2 bg-red-200' 
           data-aos='fade-left'
           >
           <Carousel autoplay arrows dotPosition="bottom" infinite={false} className=''>
            <div className='h-full'>
                <img src="https://th.bing.com/th/id/OIP.E1ww9aKXKpLkOtol7ZbM3AHaE6?w=249&h=180&c=7&r=0&o=5&pid=1.7" alt=""
                className='h-[50vh] lg:h-[80vh] ' />
            </div>
            <div>
                <img src="https://th.bing.com/th/id/OIP.dmsnWPbOVTOOlJ9dxRiLmgHaE8?w=269&h=181&c=7&r=0&o=5&pid=1.7" alt=""
                className='h-[50vh] lg:h-[80vh]' />
            </div>
            <div>
                <img src="https://th.bing.com/th/id/OIP.ReXd23ir0mZKUS5an4W36AHaEK?w=328&h=184&c=7&r=0&o=5&pid=1.7" alt=""
                className='h-[50vh] lg:h-[80vh]' />
            </div>
            <div>
                <img src="https://th.bing.com/th/id/OIF.Y5PpsIWG8Mmfic04r2U9YQ?w=209&h=184&c=7&r=0&o=5&pid=1.7" alt=""
                className='h-[50vh] lg:h-[80vh]' />
            </div>
            </Carousel>
            
           </div>
        </div>
    </div>
  )
}

export default SecOne