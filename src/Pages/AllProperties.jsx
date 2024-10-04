import React, { useState, useEffect } from 'react'
import Navbar from './LandingPages/Navbar'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import SkeletonLoader from './Skeleton'

const AllProperties = () => {
  // fetch properties from API here and render them on the page
  // implement pagination, filtering, and sorting options as needed
  // use React hooks for state management, such as useState and useEffect

  // Example API fetch to get properties:
  const [properties, setProperties] = useState([])
  const [loading, setLoading] = useState(true)
  const endpoint = "https://server-w1u1.onrender.com/get-all"
  // const {id} = useParams()

  useEffect(() => {
    const getProperties = async()=>{
        try {
        const response = await axios.get(endpoint)
        setProperties(response.data)
        } catch(error) {
          console.log(error)
        } finally{
          setLoading(false)
        }
    }
    getProperties()
    console.log("prop", properties)
  }, [])

  const singleImageIndex = 0;

  

  if (loading) {
    return (
      <div>
        <Navbar />
        <SkeletonLoader /> {/* Show skeleton while loading */}
      </div>
    );
  }
  
  return (
    <>
    <Navbar />
    <h1 className='text-3xl my-5 text-blue-800 px-10 lg:px-16'>See available properties here</h1>
    <div className='px-10 lg:px-16 py-5 grid w-100 gap-3 bg-gray-700'>
        {properties.length === 0 ? (<p className="text-center text-white text-2xl">No properties available</p>) 
        : 
        (
          <div className=''>
            {properties.map((item,index)=>(
              <div className='flex flex-col bg-white lg:flex-row gap-7 mt-3 items-center md:relative'>
              <div >
               <p className='text-white font-bold bg-orange-600 p-2 text-center'>Available for {item.role}</p>
               {item.images.length > singleImageIndex && (
                   <img src={item.images[singleImageIndex].secure_url} alt="" className='w-[330px] h-[250px] lg:w-[330px] lg:h-[300px]'/>
                 )
               }
               </div>
              <div className='text-lg leading-9 font-semibold'> 
              <p>Details: {item.houseDetails}</p>
               <p>{item.description}</p>
               <p>Location: {item.location}</p>
               <p>Price: #{item.price}</p>
              
               <Link to={`/details/${item._id}`}>
               <button className='md:py-2 md:px-12 p-2 bg-orange-600 hover:bg-blue-500 text-white md:absolute bottom-0 left-100'>
               See more...
               </button>
               </Link>
              </div>
              </div>
            ))}
          </div>
        )}
        {/* {properties.map((item, index)=>(
            <div key={index} className='bg-white'>
              {loading ? (<SkeletonLoader />) : (
                <div className='flex flex-col lg:flex-row gap-7 items-center md:relative'>
                <div>
                 <p className='text-white font-bold bg-orange-600 p-2 text-center'>Available for {item.role}</p>
                 {item.images.length > singleImageIndex && (
                     <img src={item.images[singleImageIndex].secure_url} alt="" className='w-[330px] lg:w-[330px] lg:h-[300px]'/>
                   )
                 }
                 </div>
                <div className='text-lg leading-9 font-semibold'> 
                <p>Details: {item.houseDetails}</p>
                 <p>{item.description}</p>
                 <p>Location: {item.location}</p>
                 <p>Price: #{item.price}</p>
                 <button onClick={()=>handleDelete(item._id)}
                 className='bg-red-500 p-2 text-white'>Delete</button>
                 <Link to={`/details/${item._id}`}>
                 <button className='md:py-2 md:px-12 p-2 bg-orange-600 hover:bg-blue-500 text-white md:absolute bottom-0 left-100'>
                 See more...
                 </button>
                 </Link>
                </div>
                </div>
              )}
            </div>
          ))
        } */}
    </div>
    </>
  )
}

export default AllProperties