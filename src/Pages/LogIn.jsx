import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from './redux/AuthSlice';
import { toast } from 'react-toastify';
import Loader from './Loader';
import {setLoading} from "./redux/LoadingSlice"
import { Spin } from "antd";


const LogIn = () => {

    const loading = useSelector(state => state.LoadingSlice.isLoading)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    // const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate()
    // const {handleBlur, handleChange, touched, errors} = useFormik({
    //     initialValues:{
    //         email: "",
    //         password: ""
    //     },
    //     validationSchema: Yup.object({
    //         email: Yup.string()
    //            .email("Invalid email address")
    //            .required("Email is required"),
    //         password: Yup.string()
    //             .matches(/^(A-Za-z0-9)^/)
    //            .min(8, "Password must be at least 8 characters long")
    //            .required("Password is required")
    //     })
    // })

    const myStyle = {
        borderRadius: "40px 40px 0 0",
        fontFamily: ""
    }

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
       

        console.log(response);

        // if(response.status === 401) return alert("User not found")
        
        if(response.status === 200){
            localStorage.setItem('token', response.data.token);
            console.log('token-token', response.data.token)
            dispatch(login(response.data))
            toast.success("Logging user in")
            navigate("/home")
        } else{
            console.log("error:", response.data.message)
            toast.error(`Error logging in: ${response.data.message}`)
        }
        } catch (error) {
            console.log(error);
            toast.error(`Login error: ${error.response?.data?.message || error.message}`);
        } finally{
            dispatch(setLoading(false))
        }
    }
    
  return (
    <>
        <div className='bg-blue-800 mx-auto w-10/12  md:w-1/2 my-5 pt-5 pb-2'>
        
        <div className='grid bg-white text-black-500 mt-[70px] p-5' style={myStyle}>
            <h1 className='text-3xl font-bold text-center mb-5' style={{fontFamily:""}}>Log In Here</h1>
            <label htmlFor="Email" className='font-bold'>Enter your Email:</label>
            <input type="text"
            id='email' 
            className='mb-6 p-2 bg-gray-200  focus:ring-4 ring-blue-600 rounded-md outline-0 '
            onChange={(ev)=>setEmail(ev.target.value)}
            // placeholder='Enter your email'
            />
            
            <label htmlFor="password" className='font-bold'>Enter your password:</label>
            <input type="text"
            className='mb-6 p-2 bg-gray-200 focus:ring-4 ring-blue-600 rounded-md outline-0' 
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
    </div>
    </>
  )
}

export default LogIn