import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setHouseDetails, setRole, setLocation, setDescription, setImages, setPrice } from './redux/PropertySlice'; 

const EditProfile = () => {
    const {houseDetails, role, description, images, price, location}= useSelector(state=> state.property);

    const dispatch = useDispatch();

    dispatch(setHouseDetails(houseDetails));
    dispatch(setRole(role));
    dispatch(setLocation(location));
    dispatch(setImages(images));
    dispatch(setPrice(price));
    dispatch(setDescription(description));
  return (
    <div>EditProfile</div>
  )
}

export default EditProfile