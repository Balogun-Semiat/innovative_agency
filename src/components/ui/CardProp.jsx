import React from 'react';
import { FaArrowRight } from "react-icons/fa6";

const CardProp = ({title, text, btnLink, icon}) => {
  return (    
    <div data-aos="fade-right" className='card-container overflow-hidden rounded-md p-1'>
        <div className="card w-fit lg:w-[350px] h-fit lg:h-[300px] bg-white text-gray-900 py-5 pl-5 pr-12 rounded-md">
        <div className='flex justify-center mb-3'>
        <h3 className='text-blue-800'>{icon}</h3>
        </div>
        
        <h4 className='card-title mb-2 text-xl font-bold'>{title}</h4>
        <p className='text-justify'>{text}</p>
        <span className='flex gap-2 items-center mt-8'>
        <button className=' text-blue-800 hover:border-b-2 border-b-blue-800 ease-in-out hover:border-b'>{btnLink}</button>
        <p className='text-blue-800'><FaArrowRight /></p>
        </span>
    </div>
    </div>
    
  )
}

export default CardProp