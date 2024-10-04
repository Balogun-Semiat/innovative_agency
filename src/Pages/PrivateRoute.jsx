import React from 'react';
import { Route, redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import AuthReducer from './redux/AuthSlice';
import { Navigate } from 'react-router-dom';


const PrivateRoute = ({element}) => {
    
    const verify = useSelector((state)=>state.auth.isAuthenticated)
    console.log('isAuthenticated:', verify);
    return verify ? element : <Navigate to="/login" />;
}

export default PrivateRoute