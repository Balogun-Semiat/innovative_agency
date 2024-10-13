import React, { useState, useEffect } from 'react';
import axios from "axios"
import Navbar from './LandingPages/Navbar';
import { FaUser  } from "react-icons/fa6";
import { MdOutlineDelete, MdModeEdit  } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from './redux/AuthSlice';
import { toast } from 'react-toastify';
import Loader from './Loader';
import { useNavigate } from 'react-router-dom';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import ConfirmDelete from './DeleteModal';
import { setLoading } from './redux/LoadingSlice';



const Profile = () => {

  const [profile, setProfile] = useState(null);
  const endpoint = "https://server-w1u1.onrender.com/profile";

  const navigate = useNavigate();

  const loading = useSelector(state => state.LoadingSlice.isLoading);
  const isAuthenticated = useSelector((state)=>(state.auth.isAuthenticated))

  console.log(isAuthenticated)
  const dispatch = useDispatch()

  const handleLogOut = ()=>{
    const confirmDelete = window.confirm("Are you sure you want to log out?");
    if (!confirmDelete) return
    localStorage.removeItem('token');
    dispatch(logout())
    toast.success("Logging out")
    // redirect("/")
    // console.log(isAuthenticated)
  }

  const token = localStorage.getItem("token");
  console.log("token", token)

  useEffect(() => {
    const getProfile = async()=>{
      const response = await axios.get(endpoint, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `bearer ${token}`
        }
      })
      console.log("res.data: ",response.data.user)
      setProfile(response.data.user)
    }
    getProfile()
    
  }, [])
  // console.log("profile", profile)

  const handleDel = async(id)=>{
    console.log("Product Id : ", id);

    const endpoint = `https://server-w1u1.onrender.com/del-eve`
      const response = await axios.delete( endpoint, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }  
      })
      console.log(response.data.message)
      toast.success("User and all associated posts have been deleted")
      dispatch(logout())
      // setProperties(properties.filter(property => property._id !== id));
  }
  
  const handleDelete = async(id)=>{
    // dispatch(setLoading(true))
    const updatedPostings = profile.postings.filter(posting => posting._id !== id);
    setProfile({ ...profile, postings: updatedPostings });

    try {
      const endpoint =  `https://server-w1u1.onrender.com/del-one/${id}`
      const response = await axios.delete(endpoint)
      console.log(response.data.message)
      toast.success("Property has been deleted")

      // setProperties(properties.filter(property => property._id !== id));
      profile.postings.filter(posting => posting._id !== id);
      console.log(profile.postings)
      

    } catch (error) {
      console.log(error);
      toast.error("An error occurred while deleting the property");

    // If deletion fails, revert to the previous postings (you can store previous state for this)
      setProfile({ ...profile, postings: [...profile.postings] });
    } 
  } 

  const handleEdit = async(id)=>{
    console.log("Product Id : ", id);
    navigate(`/edit-post/${id}`)
  }

  async function editUser(){
      navigate("/edit-profile")
  }

  return (
    <div>
       {profile ? 
      (<div className='mx-auto border w-full md:w-10/12 lg:8/12 my-5 p-5'>
         <div>
         <h1 className='text-3xl font-bold'>Your Profile</h1>
         <div className='bg-gray-700 my-3 p-3 rounded-md flex justify-between items-center'>
            <div className='flex items-center gap-3'>
                <button className=''>
                <FaUser className='border rounded-full bg-gray-200 text-4xl'/>
                </button>
                <span className='text-white'>
                <p className='font-bold'>Personal</p>
                <p className='text-md'>{profile.email} </p>
                </span>
            </div>

            <div className='hidden md:flex gap-5 content-center '>
           <div className='group relative'>
           <ConfirmDelete onDelete={handleDel} className='border h-[30px] px-2 flex items-center rounded-sm '>
              <MdOutlineDelete className='text-2xl text-white' />
            </ConfirmDelete>
            <p className='hidden group-hover:flex absolute -left-7 top-8 p-1 bg-gray-300 rounded-sm text-red-600 text-nowrap text-sm'>Delete Account</p>
           </div>

           <div className='group relative'>
           <button 
           onClick={editUser} 
           className='border h-[30px] px-2'> <MdModeEdit className='text-2xl text-white'/> </button> 
           <p className='hidden group-hover:flex absolute -left-7 top-8 p-1 bg-gray-300 rounded-sm text-red-600 text-nowrap text-sm'>Edit Account</p>
           </div>
            <button className='border h-[30px] px-2 text-sm text-white p-1 rounded-sm '>Logout</button>
            </div>
         </div>

         <div className='grid md:hidden text-white h-fit p-2 items-center bg-gray-700'>
            <button className='flex gap-2 items-center mb-2'
            onClick={editUser}> <MdModeEdit className='text-2xl border w-fit px-2'/>
            <span className=''>Edit profile</span></button> 

            <button
            onClick={handleDel} 
            className='flex gap-2 items-center mb-2'><MdOutlineDelete className='text-2xl border w-fit px-2 rounded-sm' /> 
            <span className=''>Delete profile</span></button>

            <button className='border w-fit px-2 text-sm p-1 rounded-sm'
            onClick={handleLogOut}>Logout</button>
          </div>
         
          <div>
            <div>
            <label htmlFor="">First Name:</label>
            <p className='border w-full'>{profile.firstName}</p>
            </div>

            <div className='mt-3'>
            <label htmlFor="name" >Last Name:</label>
            <p className='border w-full'>{profile.lastName}</p>
            </div>

            <div className='mt-3'>
            <label htmlFor="">Email</label>
            <p className='border w-full'>{profile.email}</p>
            </div>
          </div>
          </div>

        <div className='mt-5'>
          <p className='text-3xl'>Your Postings</p>
          
         {profile.postings.length === 0 ? (
          <p className='text-red-600 mt-3 text-3xl font-bold'>No postings found 😒</p>
         ) : (
         <div className='flex flex-wrap gap-3'>
           {profile.postings.map((property)=>(
            <div className='bg-gray-700 content-center w-fit p-2 mt-3'>
                <div className='w-full flex gap-3'> 
                {property.images.map((image)=>(
                <div className=''>
                  <img src={image.secure_url} alt="" className='h-[150px] md:h-[250px] md:w-[240px]' />
                </div>
        ))}
                </div>
                
                <div className='bg-gray-400 p-2'>
                <h3>Desc: {property.description}</h3>
                <h3>Details: {property.houseDetails}</h3>
                <p>Location: {property.location}</p>
                <p>Price: #{property.price}</p>
                
                <div className='flex gap-2'>
                {/* <button onClick={()=>handleDelete(property._id)}
                className='bg-red-500 p-2 text-white'>Delete Post</button> */}

                <ConfirmDelete onDelete={() => handleDelete(property._id)} /> 

                <button onClick={()=>handleEdit(property._id)}
                className='bg-orange-600 p-2 text-white'>Edit Post</button>
                </div>
                </div>
  
            </div>
        ))}
         </div>
         )}
          
        </div>

        <div className='mt-5'> 
          <p className='text-3xl'>Your messages</p>
        </div>

        {/* <div>
          <p>Messages</p>
          {profile.messages.map((msg)=>(
              <div >
                  <p>{msg.message}</p>
              </div>
          ))}
        </div> */}

      </div> ) : (
        <div>
          {/* <h1>Loading...</h1> */}
          <Loader />
        </div>
      )
      }
     

    </div>
  )
}

export default Profile