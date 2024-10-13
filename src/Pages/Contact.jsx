import React from 'react';
import Navbar from './LandingPages/Navbar';
import { FaPhoneAlt, FaWhatsappSquare, FaFacebookSquare  } from "react-icons/fa";
import { LuMailPlus } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";


const Contact = () => {
  return (
    <div className='p-5 bg-gray-200'>
        <div className='text-center mb-5'>
        <h1 className='text-3xl text-blue-900 font-bold'>Contact Us</h1>
        <p className='text-gray-600 text-lg'>Need to get in touch? No problem! You can use our contact form to send us a message.</p>
        </div>
       
       <div className='flex'>
       <div className='w-1/2'>
       <span className='flex items-center '>
        <p className='bg-orange-600 w-fit mr-3 p-2 rounded-sm text-white'><FaLocationDot className='text-xl' /></p>
        <p className='font-bold text-lg'>New York, USA</p>
       </span>

        <span className=''>
        <a href="tel:+2349161895714" className='flex items-center'>
            <p className='bg-orange-600 w-fit mr-3 p-2 rounded-sm text-white'><FaPhoneAlt className='text-xl' /></p>
            <p className='font-bold text-lg'>09161895714</p>  
        </a>
        </span>
            
        <span>
        <a href="tel:+2347086495645" className='flex items-center'> 
           <p className='bg-orange-600 w-fit mr-3 p-2 rounded-sm text-white'><FaWhatsappSquare 
           className=' text-xl' /></p>
           <p className='font-bold text-lg'>+2347086495645</p> 
        </a>
        </span>

        <span>
        <a href="tel:+2347086495645" className='flex items-center'> 
            <p className='bg-orange-600 w-fit mr-3 p-2 rounded-sm text-white'><FaFacebookSquare  
            className='text-xl' /></p>
            <p className='font-bold text-lg'>+2347086495645</p>
            </a>
        </span>
           
        <span>
        <a href="mailto:balogunsemiat2019@gmail.com" className='flex items-center'>
        <p className='bg-orange-600 w-fit mr-3 p-2 rounded-sm text-white'><LuMailPlus  className='text-xl' /> </p>
        <p>Click here to send a mail</p> 
        </a>
        </span>
       </div>

       <div className='w-1/2 bg-red-500'>
        <p>Send a message here</p>
        <textarea name="" id="" placeholder='Enter your message here'></textarea>
       </div>
       </div>
            
    </div>
  )
} 

export default Contact