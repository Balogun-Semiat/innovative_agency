import React from 'react';
import CardProp from '../../components/ui/CardProp';
import { FaConnectdevelop, FaHouseDamage  } from "react-icons/fa";
import { PiPlugsConnectedFill } from "react-icons/pi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { HiOutlineLightBulb } from "react-icons/hi";

const Services = () => {
  return (
    <div id='services' className='bg-blue-950 text-white h-fit content-center p-10 lg:px-16'>
        <div className='header text-center mb-5 '>
        <h1 className='text-3xl md:text-4xl mb-5 font-bold'>Our Services</h1>
        <p>From listing your property to finding the perfect place to call home, our comprehensive services <br /> are designed to simplify your real estate journey. Here’s what we offer:</p>
        </div>

        <div className='flex flex-wrap justify-center gap-3'>
          <CardProp
          icon={<FaConnectdevelop className='text-7xl font-bold'/>}
            title='Property Listings'
            text='Browse through an extensive collection of properties with detailed descriptions and high-quality images.'
            btnLink={"See all properties here"}
          />
            <CardProp
            icon={<FaHouseDamage className='text-7xl font-bold'/>}
              title='Property Posting'
              text='List your property quickly and efficiently with our user-friendly interface.'
              btnLink={"Post your properties here"}
            />
            <CardProp
              icon={<HiOutlineLightBulb className='text-7xl font-bold'/>}
              title='Market Insights:'
              text='Stay informed with up-to-date market trends and insights to make well-informed decisions.'
              btnLink={"See all properties here"}
            />
          <CardProp
            icon={<IoMdCheckmarkCircleOutline className='text-7xl font-bold'/>}
            title='Expert Support'
            text='Our team of real estate professionals is here to guide you through every step of the process.'
            btnLink={"See all properties here"}
          />
          <CardProp
            icon={<PiPlugsConnectedFill className='text-6xl font-bold'/>}
            title='Connect sellers with buyers'
            text='Our team of real estate professionals is here to guide you through every step of the process.'
            btnLink={"See all properties here"}
          />
          <CardProp
            icon={<IoMdCheckmarkCircleOutline className='text-7xl font-bold'/>}
            title='Expert Support'
            text='Our team of real estate professionals is here to guide you through every step of the process.'
            btnLink={"See all properties here"}
          />
        </div>
       
    </div>
  )
}

export default Services
 {/* <ul className='mt-5 leading-9 text-lg md:text-xl about' style={{listStyleType:"inherit"}}>
            <p>From listing your property to finding the perfect place to call home, our comprehensive services are designed to simplify your real estate journey. Here’s what we offer:</p>
            <li data-aos="fade-right" className='mt-3'>Property Listings: Browse through an extensive collection of properties with detailed descriptions and high-quality images.</li>
            <li data-aos="fade-right" className='mt-3'>Property Posting: List your property quickly and efficiently with our user-friendly interface.</li>
            <li data-aos="fade-right" className='mt-3'>Market Insights: Stay informed with up-to-date market trends and insights to make well-informed decisions.</li>
            <li data-aos="fade-right" className='mt-3'>Expert Support: Our team of real estate professionals is here to guide you through every step of the process.</li>
            </ul>  */}