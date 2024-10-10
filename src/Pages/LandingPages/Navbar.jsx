import React, {useState} from 'react';
import Button from '../Button';
import { useNavigate, Link, Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../redux/AuthSlice';
import { CgProfile } from "react-icons/cg";
import { FaBars, FaAngleDown} from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate()
  const isAuthenticated = useSelector((state)=>(state.auth.isAuthenticated));
  console.log("Navcheck", isAuthenticated)

  const dispatch = useDispatch();
  
  const handleLogIn = ()=>{
    navigate("/login")
  }
  const handleLogOut = ()=>{
    localStorage.removeItem('token');
    dispatch(logout())
    
  }

  const goToHome = ()=>{
    navigate("/home")
  }
  
  const handleOptions = ()=>{
    setIsOpen(!isOpen)
  }

  return (
   <>
       <nav className='sticky top-0 z-50 bg-gray-300 shadow-lg py-2 w-100'>
        <div>
          {!isAuthenticated ? (
             <div className='flex items-center justify-around'>
              <div className='grid coy-logos'>
              <div className='flex items-center pointer' onClick={goToHome}>
              <span className='text-6xl font-bold text-blue-900 pointer'>I</span>
              <span className='text-md leading-1 font-bold text-orange-600 pointer'>nnovative <br />Agency </span>
              </div>

              <p className='block pointer' style={{fontFamily:"cursive"}}>...a home you can trust</p>
              </div>

              <div className='flex gap-5'>
              <Link to="/login">
              <Button 
              className={'border-2 hover:border border-cyan-900 rounded-full py-2 px-3'}
              innertext={"Log In"}
              handleClick={handleLogIn}
              />
              </Link>
              
              <Link to="/sign-up">
              <Button 
              className={'border-2 hover:border border-cyan-900 rounded-full py-2 px-3'}
              innertext={"Sign Up"}
              />
              </Link>
              </div>
             </div>
            
          ) : (
          <div className='lg:flex  items-center justify-around '>
                <div className='flex items-center justify-around '>
                <div className='grid coy-logos'>
                <div className='flex items-center pointer' onClick={goToHome}>
                <span className='text-6xl font-bold text-blue-900 pointer'>I</span>
                <span className='text-md leading-1 font-bold text-orange-600 pointer'>nnovative <br />Agency </span>
                </div>
                <p className='block pointer' style={{fontFamily:"cursive"}}>...a home you can trust</p>
                </div>

                <div className='block lg:hidden'>
                    <button onClick={handleOptions} className='bg-orange-600 p-2'>
                      {isOpen ? <FaTimes /> : <FaBars className='text-white font-xl'/>}
                    </button>
                </div>
            </div>


            <ul className={`flex bg-gray-200 py-5 lg:bg-transparent lg:flex flex-col lg:flex-row lg:block gap-6  text-blue-950 items-center w-100 ${isOpen ? "block" : "hidden"}`}>
            {/* <li>Buy</li> */}
            {/* <li><Link to={"/rent"}>Rent</Link></li> */}
            <li className='hover:border-b-2 border-b-gray-600' onClick={goToHome}>Home</li>
            <li className='hover:border-b-2 border-b-gray-600'><a href="#about-us">About</a></li>
            <li className='hover:border-b-2 border-b-gray-600'><a href="#services">Services</a></li>
            <li className='hover:border-b-2 border-b-gray-600'><Link to={"/list-property"}>Post Property</Link></li>
            <li className='hover:border-b-2 border-b-gray-600'><Link to={"/all"}>See all Properties</Link></li>
            <li className='hover:border-b-2 border-b-gray-600'><a href="#contact">Contact us</a></li>

            <div className='rounded-full flex justify-center items-center'>
              <Link to="/profile"> 
              <span className='flex items-center content-center gap-1'><CgProfile className='w-[30px] h-[30px]' /> 
              <p className='text-sm'>Profile</p></span>
              </Link>
            </div>

            <div className='flex gap-5'>
            <Link to="/">
            <Button 
            className={'border-2 hover:border border-cyan-900 rounded-full py-2 px-3'}
            innertext={"Log Out"}
            handleClick={handleLogOut}
            />
            </Link>
            </div>
            </ul>
          
            </div>
            )}
          </div>  
    </nav>
   </>
  )
}

export default Navbar