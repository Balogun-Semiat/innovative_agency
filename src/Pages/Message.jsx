import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

const Message = ({propertyId }) => {
    const [message, setMessage] = useState('');
    // const {propertyId} = useParams();
    console.log("propId", propertyId)
    // console.log("sellerId", sellerId)

    const handleMessage = async(e)=>{
      e.preventDefault();
        try {
          const endpoint = `https://server-w1u1.onrender.com/send-message/${propertyId}`;
          const token = localStorage.getItem("token")
          if (!token) {
            return alert("You are not authenticated. Please log in to send a message.");
          }
          console.log("Retrieved token:", token);

        const payload = {
          message
        }

        const response = await axios.post(endpoint, payload, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        }) 
        console.log("res",response)
        // alert("message sent successfully")
        toast.success("Message sent successfully") 
        } catch (error) {
          toast.error("Error sending message: " + error.response?.data?.message || error.message)
          // alert("Error sending message:" + error.response?.data?.message || error.message);
        }
    }

  return (
    <div className=''>
        <form action="" onSubmit={handleMessage} className='grid mx-5 lg:mx-20 bg-white p-5'>
        <p className='text-2xl font-bold text-center p-2'>Contact the Owner</p>
           <textarea name="" placeholder="Send a message to the seller"
           className='my-2 p-2  ring-4 focus:ring-blue-600 rounded-md outline-0 '
           onChange={(e)=>setMessage(e.target.value)}>
           </textarea>
           <input type="text" className='w-100'/>
           
           <div className='flex justify-center items-center'>
           <button type='submit'
            className=' w-fit py-2 px-4 text-white bg-orange-600 rounded-full' 
            >Send Message</button>
           </div>
        </form>
    </div>
  )
}

export default Message