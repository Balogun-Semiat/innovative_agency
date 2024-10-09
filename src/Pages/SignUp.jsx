import React, {useState} from 'react';
import axios from "axios"
import { useNavigate, Link} from 'react-router-dom';
import { toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa6";
import { setLoading } from './redux/LoadingSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Spin } from "antd";


const SignUp = () => {
    const loading = useSelector(state => state.LoadingSlice.isLoading);
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    console.log("sign-up", isAuthenticated)

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [role, setRole] = useState("seller")
    const [showPassword, setShowPassword] = useState(false);  

    const navigate = useNavigate();
    const togglePasswordVisibility =()=>{
       setShowPassword(!showPassword)
    }
    // const notify = () => toast("Wow so easy!");

    const handleSignUp = async(ev)=>{
        ev.preventDefault();
        dispatch(setLoading(true));
        try {
            const endpoint = "https://server-w1u1.onrender.com/sign-up";

            const payload = {
                firstName,
                lastName,
                email,
                password,
                role
            }
            console.log(payload)

            const response = await axios.post(endpoint, payload)
            console.log(response.data)
            toast.success("User Successfully Registered")
            // alert("User Successfully Registered")
            navigate("/login")

        } catch (error) {
            toast.error(error.response?.data?.message || error.message)
        } finally {
            dispatch(setLoading(false));
        }
    }

  return (
    <div className='mx-auto my-20'>
        <form action="" className='grid mx-5 lg:mx-20 bg-blue-800 p-5'> 
            <h3 className='text-3xl font-bold text-white text-center'>Register your Details Here</h3>
            <input type="text" 
            className='my-6 p-2  focus:ring-4 ring-blue-600 rounded-md outline-0'
            onChange={(ev)=>setFirstName(ev.target.value)}
            placeholder='Enter your first name'/>
            <input type="text" 
            className='mb-6 p-2  focus:ring-4 ring-blue-600 rounded-md outline-0'
            onChange={(ev)=>setLastName(ev.target.value)}
            placeholder='Enter your last name'/>
            <input type="text" 
            className='mb-6 p-2  focus:ring-4 ring-blue-600 rounded-md outline-0'
            onChange={(ev)=>setEmail(ev.target.value)}
            placeholder='Enter your email'/>
            
            <div className='relative'>
            <input type={showPassword ? "text" : "password"}
            className='mb-6 p-2 w-full focus:ring-4 ring-blue-600 rounded-md outline-0' 
            onChange={(ev)=>setPassword(ev.target.value)}
            placeholder='Enter your password'/>
            <button 
            type='button'
            className='absolute right-10 top-2 text-xl' onClick={togglePasswordVisibility}>
                <i>{showPassword ? <FaEyeSlash  /> : <IoEyeSharp />}</i>
            </button>
            </div>

            <label htmlFor="" className='text-white'>Are you registering as a buyer or seller?</label>
            <select onChange={(ev)=>setRole(ev.target.value)} 
            className='p-2'
            name={role} 
            defaultValue={"seller"} id="">
                <option value="seller">Seller</option>
                <option value="buyer">Buyer</option>
            </select>

            <div className='flex justify-center items-center gap-2'>
            <button 
            className='my-6 w-fit py-2 px-4 text-orange-600 bg-white rounded-md hover:text-white hover:bg-blue-300 ' onClick={handleSignUp}
            disabled={loading}>
                 {loading ? <Spin /> : "Sign Up"}
            </button>
            <span>Already have an account?
                <Link to="/login" className='text-white'>Login here</Link>
            </span>
           </div>
           
        </form>
    </div>
  )
}

export default SignUp