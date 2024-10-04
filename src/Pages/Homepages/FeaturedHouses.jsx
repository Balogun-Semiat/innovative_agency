import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const FeaturedHouses = () => {
  const [properties, setProperties] = useState([]);

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get('https://server-w1u1.onrender.com/get-all');
        setProperties(shuffle(response.data));
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };

    fetchProperties();
  }, []);

  return (
    <div className='text-blue-950 p-10 lg:px-16 lg:py-3 content-center h-fit lg:h-[80vh] bg-gray-200'>
        <h1 className='text-5xl font-bold'>Featured Houses</h1>
        <p className='underline mt-3'>
           <Link to="/all">View available properties</Link>
           </p>
        <div data-aos="fade-up-left" className="featured-houses grid grid-cols-2 lg:grid-cols-4 gap-5 mt-4">
            {properties.slice(0, 4).map(property => (
        <div key={property._id} className="property-card ">
            <div className=''>
            <img src={property.images[0].secure_url} alt={property.title} className='h-[200px] lg:h-[300px] w-[300px] gap-3' />
            </div>
            {/* <h3>{property.houseDetails}</h3>
            <p>{property.location}</p>
            <p>${property.price}</p> */}
        </div>
            ))}
    </div>
    </div>
  )
}

export default FeaturedHouses