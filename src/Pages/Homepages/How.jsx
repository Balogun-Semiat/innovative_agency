import React from 'react'
import Button from '../Button'

const How = () => {
  return (
    <div className='bg-gray-200 text-blue-950 h-fit lg:h-[80vh] content-center p-10 lg:px-16'>
        <h1 className='text-3xl md:text-5xl mb-3 font-bold'>How It Works</h1>
        <ol className='mt-5 leading-9 text-lg md:text-xl about' style={{listStyleType:"-moz-initial"}}>
            <p>Finding your next home is simple with our 3-step process:</p>
            <li data-aos="fade-right" className='mt-3'>Search: Use our advanced filters to find properties that match your criteria.</li>
            <li data-aos="fade-right" className='mt-3'>Connect: Reach out to sellers or landlords directly through our platform.</li>
            <li data-aos="fade-right" className='mt-3'>Move In: Finalize the deal and move into your new home with confidence.</li>
            <p data-aos="fade-right" className='mt-5'>Ready to find your new home?</p>
            <Button 
            dataaos={"fade-right"}
            innertext={"Let's get started"}
            className={"rounded-lg p-3 lg:mt-5 bg-blue-950 text-white text-xl"}
            />
            </ol> 
    </div>
  )
}

export default How