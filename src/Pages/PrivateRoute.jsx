import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { logout } from './redux/AuthSlice'; // Adjust path as necessary
import { validateToken } from './Authorization/ValidateToken';

const PrivateRoute = ({ element }) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated); // From Redux state

  // You don't need to re-check token validity here since it's handled in App.jsx

  // If the user is authenticated, render the passed element (page/component)
  if (isAuthenticated) {
    return element;
  } 
//   else {
//     // If not authenticated, log the user out and redirect to login
//     dispatch(logout());
//     return <Navigate to="/" />;
// }

  // If not authenticated, redirect to the login page
  return <Navigate to="/login" />;
};

export default PrivateRoute;
