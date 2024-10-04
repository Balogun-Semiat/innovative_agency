import React, {useEffect, useState} from 'react';
import axios from "axios";
import { useParams, Link } from 'react-router-dom';
import Loader from './Loader';
import Navbar from './LandingPages/Navbar';
import Message from './Message';
import { FaAngleLeft } from "react-icons/fa6";

const ViewDetails = () => {
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  const { id } = useParams(); // Ensure id is correctly obtained

  console.log("URL id:", id); // Log the id to verify

  const endpoint = `https://server-w1u1.onrender.com/get-one/${id}`;
  const token = localStorage.getItem("token");

  useEffect(() => {
    const getProperty = async () => {
      try {
        const response = await axios.get(endpoint, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });

        if (response.data && response.data.property) {
          console.log("Property data:", response.data.property); // Log property
          setProperty(response.data.property); // Set the property
        } else {
          console.log("No property found in response");
          setProperty(null); // Handle null response
        }

      } catch (error) {
        console.log("Error fetching property:", error); // Log any errors
        setProperty(null); // Set property to null in case of error
      } finally {
        setLoading(false); // Stop loading after fetching
      }
    };

    getProperty(); // Call the async function

  }, [id]); // Depend on id, not property

  // Handle loading state
  if (loading) {
    return <p>Loading...</p>;
  }

  // Handle case when property is null
  if (!property) {
    return <p>No property found</p>;
  }

  // Render property details
  return (
    <div>
      <Navbar />

      <div className='bg-gray-700 p-5'>
        <p className='p-2 text-white text-xl' style={{fontFamily:"sans-serif"}}>Pictures of the property</p>

      <div className='w-full flex gap-3'> 
          {property.images.map((image)=>(
              <div className=''>
                <img src={image.secure_url} alt=""
                className='h-[150px] md:h-[250px]' />
              </div>
          ))}
      </div>
      <div className='w-50'>
      <h1 className='text-2xl font-semibold text-white'>House Details: {property.houseDetails}</h1>
      <p className='text-white '>{property.description}</p>
      <p className='text-white'>Price: #{property.price}</p>
      </div>
      
      <div className='flex justify-center items-center'>
       <Link to="/all">
       <button type='submit'
        className=' w-fit flex items-center gap-1 py-2 px-4 text-white bg-orange-600 rounded-full font-bold'>
         <FaAngleLeft/> Go back
          </button>
       </Link>
      </div>
      </div>

      <div className='bg-gray-700 mt-5 w-100 p-5'>
        <Message propertyId={property._id} />
      </div> 

      
    </div>
  );
};
export default ViewDetails



