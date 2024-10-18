import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/AuthSlice';
import { toast } from 'react-toastify';
import Loader from '../components/ui/Loader';
import {setLoading} from "../redux/LoadingSlice"
import { Spin } from "antd";
import welc from "../img/welc.jpeg"


const LogIn = () => {
    const loading = useSelector(state => state.LoadingSlice.isLoading);
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const user = useSelector((state)=>(state.auth.user));
    console.log("user", user)

    console.log("auth", isAuthenticated)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate()
   

    const handleLogIn = async()=>{
        dispatch(setLoading(true))

        try {
            const endpoint = "https://server-w1u1.onrender.com/login";

        const payload = {
            email,
            password
        }

        const response = await axios.post(endpoint, payload, {
            headers: {
                    'Content-Type': 'application/json'
                }
        })
       

        console.log("response", response);

        if(response.status === 401) return alert("User not found")
        
        const token  = response.data.token;
        const user  = response.data.user.lastName;

     

        console.log(token, user)
       
        if (token) {
            localStorage.setItem("token", token);
            localStorage.setItem('userLastName', user); 
            dispatch(login({ token, user })); 
          console.log(token, user)
          toast.success("Login successful!");

          navigate("/home");
        } else{
            console.log("error: No token provided");
            toast.error(`Error logging in: ${response.data.message}`)
        }
        } catch (error) {
            console.log(error);
            toast.error(`Login error: ${error}`);
        } finally{
            dispatch(setLoading(false))
        }
    }
    
  return (
    <>
        <div className='flex bg-lemon content-center gap-8 items-center content-center p1-0 lg:pl-5 lg:pl-12 h-[70vh] lg:h-[84vh]' style={{fontFamily:"cursive"}}>
        
        <div className='grid bg-white mx-auto p-5 shadow-lg w-full lg:w-1/2 '>
            <h1 className='text-xl text-center mb-5 text-lemon' style={{fontFamily:""}}>Log In Here</h1>
            <label htmlFor="Email" className='text-lemon'>Enter your Email:</label>
            <input type="email"
            id='email' 
            className='mb-6 shadow-md p-2 bg-gray-100  focus:ring-4 ring-blue-600 rounded-md outline-0 '
            onChange={(ev)=>setEmail(ev.target.value)}
            // placeholder='Enter your email'
            />
            
            <label htmlFor="password" className='text-lemon'>Enter your password:</label>
            <input type="password"
            className='mb-6 p-2 shadow-md bg-gray-100 focus:ring-4 ring-blue-600 rounded-md outline-0' 
            onChange={(ev)=>setPassword(ev.target.value)}
            // placeholder='Enter your password'
            />
            
            <div className='flex justify-center items-center gap-2'>
            <button 
            className='my-6 w-fit py-2 px-4 text-white bg-blue-600 rounded-md hover:text-white hover:bg-blue-400' 
            onClick={handleLogIn}
            disabled={loading}>
                {loading ? 
                <span className='flex items-center gap-1'>
                    <Spin className='text-white'/>
                    <p>Logging in</p>
                </span>   : 'Login'}
            </button>

            <span>Don't have an account? 
                <Link to="/sign-up" className='text-blue-500 pl-1'>Sign up here</Link>
            </span>
            
            </div>
        </div>
        

        <div className='hidden lg:flex w-1/2 justify-center content-center items-center ' >
            {/* <img src={happy} className='w-full h-bg-green-300' alt="" /> */}
            <img src={welc} className='w-full h-bg-green-300 h-[84vh]' alt="" />
          
        </div>
    </div>
    </>
  )
}

export default LogIn