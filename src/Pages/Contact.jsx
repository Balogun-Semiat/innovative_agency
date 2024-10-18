import React from 'react';
import { FaPhoneAlt, FaWhatsappSquare, FaFacebookSquare  } from "react-icons/fa";
import { LuMailPlus } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";


const Contact = () => {
  return (
    <div className='p-5 lg:px-16 bg-gray-200'>
        <div className='text-center mb-8'>
        <h1 className='text-3xl text-blue-900 font-bold my-2'>Contact Us</h1>
        <p className='text-gray-600 text-lg'>Need to get in touch? No problem! You can use our contact form to send us a message.</p>
        </div>
       
       <div className='grid lg:flex  justify-center items-center my-5 gap-5'>
       <div className='w-full lg:w-1/2  flex justify-center'>
      <div className='bg-white shadow-lg w-fit p-8 rounded-md text-gray-600'>
      <span className='flex items-center mb-5'>
        <p className='bg-lemon w-fit mr-3 p-2 rounded-full text-white'><FaLocationDot className='text-xl' /></p>
        <p className='font-bold text-lg'>New York, USA</p>
       </span>

       <span className=''>
        <a href="tel:+2349161895714" className='flex items-center mb-5'>
            <p className='bg-lemon w-fit mr-3 p-2 rounded-full text-white'><FaPhoneAlt className='text-xl' /></p>
            <p className='font-bold text-lg'>+2349161895714</p>  
        </a>
        </span>
            
        <span>
        <a href="tel:+2347086495645" className='flex items-center mb-5'> 
           <p className='bg-lemon w-fit mr-3 p-2 rounded-full text-white'><FaWhatsappSquare 
           className=' text-xl' /></p>
           <p className='font-bold text-lg'>+2347086495645</p> 
        </a>
        </span>

        <span>
        <a href="https://www.facebook.com/semiat.balogun.18?mibextid=LQQJ4d" className='flex items-center mb-5'> 
            <p className='bg-lemon w-fit mr-3 p-2 rounded-full text-white'><FaFacebookSquare  
            className='text-xl' /></p>
            <p className='font-bold text-lg'>Balogun Semiat</p>
            </a>
        </span>
           
        <span>
        <a href="mailto:balogunsemiat2019@gmail.com" className='flex items-center '>
        <p className='bg-lemon w-fit mr-3 p-2 rounded-full text-white'><LuMailPlus className='text-xl' /> </p>
        <p className='font-bold text-lg'>balogunsemiat2019@gmail.com</p> 
        </a>
        </span>
      </div>

       </div>

       <div className='w-full lg:w-1/2  p-5 bg-white'>
        <p className='text-gray-800 text-lg text-center font-semibold mb-3'>Send a message here</p>
        <p>Note: Message not yet working</p>

        <div>
        <div className='mb-3'>
        <label htmlFor="name" className='text-lg mb-2'>Your name:</label> <br />
        <input type="text" className='w-full outline-0 border border-lemon hover:border-2 p-1' />
        </div>
        
        <div className='mb-3'>
        <label htmlFor="email" className='text-lg mb-2 p-2'>Your email</label> <br />
        <input type="email" className='w-full outline-0 border border-lemon hover:border-2 p-1' /> <br />
        </div>

        <div className='mb-3'>
        <label htmlFor="message" className='text-lg mb-2'>Enter your message here:</label> <br />
        <textarea name="" id="" className='w-full outline-0 border border-lemon hover:border-2 p-1 h-[80px]'></textarea>
        </div>
        </div>
       </div>
       </div>
            
    </div>
  )
} 

export default Contact