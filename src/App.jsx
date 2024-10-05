import React, {useEffect} from 'react'
import {Routes, Route} from "react-router-dom"
import Homepage from './Pages/LandingPages/Homepage'
import SignUp from "./Pages/SignUp"
import Home from './Pages/Homepages/Homepage';
import LogIn from "./Pages/LogIn"
import PrivateRoute from './Pages/PrivateRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ListProperty from './Pages/Post-Property';
import RentProperty from './Pages/Rent-Property';
import AllProperties from './Pages/AllProperties';
import ViewDetails from './Pages/ViewDetails';
import Message from './Pages/Message';
import Profile from './Pages/Profile';
import EditPost from './Pages/EditPost';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import EditProfile from './Pages/EditProfile';

AOS.init();


function App() {

  return (
    <>
    <Routes>
      <Route path="/" element= {<Homepage />} />
      <Route path='/sign-up' element={<SignUp />} />
      <Route path='/login' element={<LogIn />} />
      <Route path="/home" element={<PrivateRoute element={<Home />} />} />
      <Route path="/list-property" element={<PrivateRoute element={<ListProperty />} />} />
      <Route path="/rent" element={<PrivateRoute element={<RentProperty />} />} />
      <Route path="/all" element={<PrivateRoute element={<AllProperties />} />} />
      {/* <Route path='/details/:id' element={<ViewDetails />} /> */}
      <Route path="/details/:id" element={<PrivateRoute element={<ViewDetails />} />} />
      <Route path="/message/:id" element={<PrivateRoute element={<Message />} />} />
      <Route path="/profile" element={<PrivateRoute element={<Profile />} />} />
      <Route path="/edit-post/:id" element={<PrivateRoute element={<EditPost />} />} />
      <Route path="/edit-profile" element={<PrivateRoute element={<EditProfile />} />} />
    </Routes>
    
    <ToastContainer
    position="top-center"
    autoClose={3000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
    />

    </>
  )
}

export default App
