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
import { useDispatch } from 'react-redux';
import { checkAuth } from './redux/AuthSlice';
import Contact from './Pages/Contact';
import Navbar from './components/ui/Navbar';
import { login, logout } from './redux/AuthSlice';
import { validateToken } from "./Authorization/ValidateToken";
import {jwtDecode} from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Footer from './components/ui/Footer';
import { useSelector } from 'react-redux';
// import { checkTokenAndNotify } from './Pages/Authorization/checkToken';

AOS.init();

 
function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const user = useSelector((state)=>(state.auth.user));
  // console.log("first", user)

  const validateToken = (token) => {
    try {
      const decodedToken = jwtDecode(token);
      return decodedToken.exp * 1000 > Date.now(); // Check if token has expired
    } catch (error) {
      return false;
    }
    
  };


  useEffect(() => {
    const token = localStorage.getItem('token');
    const lastName = localStorage.getItem('userLastName');

    const handleLogIn = async() =>{
      if (token && validateToken(token)) {
        dispatch(login({ token, lastName}));
      } else if (token && !validateToken(token)) {
        toast.warning('Your session has expired. You will be logged out.');
        setTimeout(() => {
          dispatch(logout());
        }, 5000); 
      }
    }
    handleLogIn()
  }, [dispatch]);

  
  // useEffect(() => {
    // checkTokenAndNotify(dispatch, () => dispatch(logout())); // Call the token check function on app load
  // }, [dispatch]);

  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/login' element={<LogIn />} />
      <Route path='/sign-up' element={<SignUp />} />

      <Route path="/home" element={<PrivateRoute element={<Home />} />} />
      <Route path="/list-property" element={<PrivateRoute element={<ListProperty />} />} />
      <Route path="/rent" element={<PrivateRoute element={<RentProperty />} />} />
      <Route path="/all" element={<PrivateRoute element={<AllProperties />} />} />
      <Route path="/details/:id" element={<PrivateRoute element={<ViewDetails />} />} />
      <Route path="/message/:id" element={<PrivateRoute element={<Message />} />} />
      <Route path="/profile" element={<PrivateRoute element={<Profile />} />} />
      <Route path="/edit-post/:id" element={<PrivateRoute element={<EditPost />} />} />
      <Route path="/edit-profile" element={<PrivateRoute element={<EditProfile />} />} />
      <Route path="/contact-us" element={<PrivateRoute element={<Contact />} />} />
    </Routes>
    <Footer />

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
