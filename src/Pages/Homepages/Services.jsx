import React from 'react'

const Services = () => {
  return (
    <div className='bg-blue-950 text-white h-fit lg:h-[80vh] content-center p-10 lg:px-16'>
        <h1 className='text-5xl mb-3 font-bold'>Our Services</h1>
        <ul className='mt-5 leading-9 text-xl about' style={{listStyleType:"inherit"}}>
            <p>From listing your property to finding the perfect place to call home, our comprehensive services are designed to simplify your real estate journey. Here’s what we offer:</p>
            <li data-aos="fade-right" className='mt-3'>Property Listings: Browse through an extensive collection of properties with detailed descriptions and high-quality images.</li>
            <li data-aos="fade-right" className='mt-3'>Property Posting: List your property quickly and efficiently with our user-friendly interface.</li>
            <li data-aos="fade-right" className='mt-3'>Market Insights: Stay informed with up-to-date market trends and insights to make well-informed decisions.</li>
            <li data-aos="fade-right" className='mt-3'>Expert Support: Our team of real estate professionals is here to guide you through every step of the process.</li>
            </ul> 
    </div>
  )
}

export default Services