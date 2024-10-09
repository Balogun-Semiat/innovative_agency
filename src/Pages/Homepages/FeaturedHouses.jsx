import React, { useState, useEffect, useCallback  } from 'react';
import axios from 'axios';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { FaAngleLeft, FaAngleRight  } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const EmblaCarousel = () => {
  const [properties, setProperties] = useState([]);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000 })]);

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


  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="embla bg-gray-200 py-10 px-5 lg:px-16">
      <h3 className='text-3xl lg:text-4xl font-bold text-blue-950'>Featured Houses</h3>
      <p className='underline mt-3 text-blue-600'>
           <Link to="/all">View available properties</Link>
      </p>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {properties.slice(0, 4).map((property, index) => (
            <div key={index} className="embla__slide">
              <img
                src={property.images[0].secure_url}
                alt={property.title}
                className="featured-img rounded-md w-full h-full"
              />
              <p className='location text-xl text-blue-900 font-bold'>Location: {property.location}</p>
              <p className='price text-2xl '>Price: {property.price}</p>
            </div>
          ))}
        </div>
          <div className='gradient'></div>
        
      </div>

       <div className='flex gap-3 mt-5'>
       <button className="embla__prev bg-gray-400 rounded-full p-2 " onClick={scrollPrev}>
        <FaAngleLeft className='text-xl'/>
      </button>
      <button className="embla__next bg-gray-400 rounded-full p-2" onClick={scrollNext}>
        <FaAngleRight className='text-xl'/>
      </button>
       </div>
    </div>
  );
};

export default EmblaCarousel;
