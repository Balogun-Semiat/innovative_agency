import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from './LandingPages/Navbar';
import { setHouseDetails, setRole, setLocation, setDescription, setImages, setPrice } from './redux/PropertySlice';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import { toast } from 'react-toastify';

const EditPost = () => {
    const dispatch = useDispatch();
    // const navigate = useNavigate()

    const houseDetails = useSelector(state => state.property.houseDetails);
    const role = useSelector(state => state.property.role);
    const description = useSelector(state => state.property.description);
    const images = useSelector(state => state.property.images);
    const price = useSelector(state => state.property.price);
    const location = useSelector(state => state.property.location);
    const [property, setProperty] = useState([])

    const [result, setResult] = useState(''); 

    const {id} = req.params
    
    const endpoint= `http://localhost:3500/edit-post/${id}`

    useEffect(() => {
     const getProperty = async()=> {
        try {
          const response = await axios.get(endpoint);
          setProperty(response.data);
          console.log("response", response.data)
          console.log("prop", response.data.property)
        } catch (error) {
          console.log('Error fetching property:', error);
          toast.error(error.response?.data?.message)
        }
     }
     getProperty()
    }, [property])
    

    const handleEdit = async ()=>{
      const payload = {
        houseDetails: property.houseDetails,
        description,
        images,
        price,
        location
      }

      const response = await axios.patch(endpoint);
      console.log("response", response)
    }

  return (
    <div>
        <Navbar />
        <div className='w-full bg-blue-400 p-5'>
        <form action="" className='grid items-center bg-blue-800 p-5 lg:mx-auto w-fit lg:w-10/12'> 
            <h3 className='text-3xl font-bold text-white text-center'>Make changes to your post here</h3>
            <input type="text" 
            className='my-6 p-2  focus:ring-4 ring-blue-600 rounded-md outline-0'
            onChange={(ev)=> dispatch(setHouseDetails(ev.target.value))}
            defaultValue={houseDetails}
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
            className='my-6 w-fit py-2 px-4 text-orange-600 bg-white rounded-full hover:text-white hover:bg-orange-800 ' onClick={handleEdit}>Post Property</button>
           </div>
           
        </form>
    </div>
    </div>

    
  )
}

export default EditPost