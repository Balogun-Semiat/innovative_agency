import React from 'react';
import Button from '../Button';
import { useNavigate, Link } from 'react-router-dom';

const myStyle ={
  textShadow: "1px 2px 2px white",
  lineHeight:"60px"
}
const secStyle ={
  textShadow: "1px 2px 2px white",
  lineHeight:"40px"
}


const SecOne = () => {
  const navigate = useNavigate()
  
  const Click = ()=> {
    navigate("/sign-up")
  }
  
  return (
    <>
        <div className='house-bg content-center text-center px-5 lg:p-20'>
            <h1 className='hidden lg:block text-3xl md:text-4xl lg:text-5xl text-orange-600 font-bold' style={myStyle}>Find your dream property - Buy, <br />Sell, and Connect with Ease</h1>

            <h1 className='block lg:hidden text-3xl md:text-4xl lg:text-5xl text-orange-600 font-bold' style={secStyle} md:style={myStyle}>Find your dream property - Buy, Sell, and Connect with Ease</h1>

            <p className='hidden lg:block text-white mt-8 text-lg md:text-xl mb-5'>Whether you're looking to buy your first home or sell a property, <br /> our platform offers a seamless and secure experience. Discover the perfect place with our <br /> easy-to-use search tools and verified listings.          
            </p>

            <p className='lg:hidden text-white text-wrap mt-4 text-lg md:text-xl mb-5'>Whether you're looking to buy your first home or sell a property,  our platform offers a seamless and secure experience. Discover the perfect place with our  easy-to-use search tools and verified listings.          
            </p>

            {/* <p>Contact us here</p>
            <a href="mailto:balogunsemiat2019@gmail.com">balogunsemiat2019@gmail.com</a>. */}
            
            <Button 
            className={'rounded-md py-2 md:px-2 md:mt-8 text-white bg-orange-600 w-full md:w-1/2 md:h-[50px] text-xl'}
            innertext={"Sign Up Now to List Your Property for Sale!"}
            handleClick={Click}
          />
          <p className='text-xl my-3 text-white'>OR</p>
           <Link to="/login">
           <Button 
            className={'rounded-md py-2 md:px-2  text-white bg-orange-600 w-full md:w-1/2 md:h-[50px] text-xl'}
            innertext={"Log In to Continue"}
          />
          </Link>
        </div>
    </>
  )
}

export default SecOne