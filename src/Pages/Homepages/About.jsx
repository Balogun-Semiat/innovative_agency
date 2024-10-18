import React from 'react'
import Button from '../../components/ui/ButtonNew'
import WordbyWordText from "../WordbyWordText";
import interior from "../../img/interior.jpeg";
import house from "../../img/house.jpg";
import long from "../../img/long.jpeg";


const About = () => {
  return (
    <div id="about-us" className='flex flex-col-reverse lg:flex-row h-fit items-center p-5 text-gray-800 gap-2'>
      <div className='w-full md:w-1/2 flex gap-2 items-center p-2 lg:p-5'>
        <img src={long} alt="" className='w-1/2 rounded-sm'/>
        <div className='grid gap-2'>
        <img src={house} alt="" className='rounded-sm'/>
        <img src={interior} alt="" className='rounded-sm'/>
        </div>
      </div>
      <div className='w-full lg:w-1/2 p-5'>
        <h1 className='text-3xl md:text-5xl mb-3 font-bold'>Who We Are</h1>
        <p className='mt-5 text-lg md:text-xl about text-justify'>At Innovative Agency, we are committed to connecting you with the best properties on the market. <br /> With a deep understanding of the real estate landscape, our platform offers a seamless experience <br /> for buyers, sellers, and renters. Whether you're looking for a cozy apartment, a family home, or a <br /> commercial space, we provide a wide range of options to suit your needs.</p> 
    </div>
    </div>
  )
}

export default About 