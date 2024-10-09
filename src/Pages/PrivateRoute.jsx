import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import AuthReducer from './redux/AuthSlice';
import { Navigate } from 'react-router-dom';
import { logout } from './redux/AuthSlice';


const PrivateRoute = ({element}) => {
    const dispatch = useDispatch();  // Get the dispatch function from the Redux store
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    console.log('isAuthenticated state:', isAuthenticated);

    // If the user is authenticated, return the passed component (element), otherwise redirect to login
    //   return isAuthenticated ? element : dispatch(logout())
 
    if (isAuthenticated) {
        return element;
    } 

    // dispatch(logout());
    return <Navigate to="/login" />;
}

export default PrivateRoute