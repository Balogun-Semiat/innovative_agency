import React, {useState} from 'react'
import Navbar from './LandingPages/Navbar'
import axios from 'axios';
import { toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {login} from './redux/AuthSlice';
import { setHouseDetails, setRole, setLocation, setDescription, setImages, setPrice } from './redux/PropertySlice';


const ListProperty = () => {
  const isAuthenticated = useSelector((state)=>(state.auth.isAuthenticated));
  // console.log(isAuthenticated)

  
  const houseDetails = useSelector((state) => (state.property.houseDetails));
  const role = useSelector(state=> state.property.role);
  const location = useSelector(state=> state.property.location);
  const description = useSelector(state=> state.property.description);
  const images = useSelector(state=> state.property.images);
  const price = useSelector(state=> state.property.price);

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const [result, setResult] = useState('');
  
  const handleImages = (e)=>{
    const files = e.target.files;
    const fileArray = Array.from(files);
  
    fileArray.forEach((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setResult((prevImages) => [...prevImages, reader.result]);
      };
    });
  }
  // console.log(result);

  const handlePosting = async(e)=>{
    e.preventDefault()
   try {
    const token = localStorage.getItem('token');
    
    const endpoint = "https://server-w1u1.onrender.com/list";

    const payload = {
      houseDetails,
      description,
      location, 
      price,
      images:result,
      role
    }

    // console.log("payload",payload)
    const response = await axios.post(endpoint, payload, 
      {
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `bearer ${token}`
      }
      }
)
// console.log(response.status)
    // console.log("Your response", response.data)
  
    if (response.status === 200) {
      dispatch(login(response.data)); // Assuming you have a login action that sets isAuthenticated
      toast.success("Property posted successfully")
      navigate("/all");
    } else {
      // console.log("error:", response.data.message);
      alert("Error logging in", response.data.message);
    }
   } catch (error) {
    console.error('Error posting property:', error.response?.data?.message || error.message);
   }
  }

  return (
    <>
        <Navbar />
        <div className='w-full bg-blue-400 '>
        <form action="" className='grid items-center bg-blue-800 p-7 md:p-5 lg:mx-auto lg:w-10/12'> 
            <h3 className='text-xl md:text-3xl font-bold text-white text-center'>Enter your property details here</h3>
            <input type="text" 
            className='my-6 p-2  focus:ring-4 ring-blue-600 rounded-md outline-0'
            onChange={(ev)=> dispatch(setHouseDetails(ev.target.value))}
            value={houseDetails}
            placeholder='What kind of apartment do you want to sell?'/>

           <textarea name="" placeholder='Enter Description'
           onChange={(ev)=> dispatch(setDescription(ev.target.value))}
           className='my-6 p-2  focus:ring-4 ring-blue-600 rounded-md outline-0'></textarea>

            {/* <label htmlFor="" className='text-white'>Attach images of the property</label> */}
            <input type="file" 
            multiple onChange={(e)=> dispatch(handleImages(e))}
            className='mb-6 p-2  focus:ring-4 ring-blue-600 rounded-md outline-0 text-white'
            placeholder='Enter images'/>

            <input type="text"
            className='mb-6 p-2  focus:ring-4 ring-blue-600 rounded-md outline-0'
            onChange={(ev)=> dispatch(setLocation(ev.target.value))} 
            placeholder='Enter location'/>

            <input type="number"
            onChange={(ev)=> dispatch(setPrice(ev.target.value))}
            className='mb-6 p-2  focus:ring-4 ring-blue-600 rounded-md outline-0' 
            placeholder='Enter price'/>

            <label htmlFor="">Is this property for sale, rent or shortlet? Select an option;</label>
            <select name={role} id="" defaultValue={"Sale"} onChange={(ev)=> dispatch(setRole(ev.target.value))} >
              <option value="Sale">For sale</option>
              <option value="Rent">For rent</option>
              <option value="Shortlet">For shortlet</option>
            </select>

            <div className='flex justify-center items-center gap-2'>
            <button 
            className='my-6 w-fit py-2 px-4 text-orange-600 bg-white rounded-full hover:text-white hover:bg-orange-800 ' onClick={handlePosting}>Post Property</button>
           </div>
           
        </form>
    </div>
    </>
  )
}

export default ListProperty