import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { logout } from '../redux/AuthSlice'; 
import { validateToken } from '../Authorization/ValidateToken';
// import {setLoading} from "../redux/LoadingSlice"

const PrivateRoute = ({ element }) => {
  const token = localStorage.getItem('token'); 
  // console.log("private-tokn", token)
  // const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated); // From Redux state
  // const loading = useSelector(state => state.LoadingSlice.isLoading);
  // dispatch(setLoading(true))
  // console.log("loading", loading)

  if (!isAuthenticated && !token) {
    return <Navigate to="/" />;
  }
  
  if (isAuthenticated) {
    return element;
  } 

  return null;
};

export default PrivateRoute;
