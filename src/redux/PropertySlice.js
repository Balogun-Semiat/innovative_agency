import { createSlice } from "@reduxjs/toolkit";

export const PropertySlice = createSlice({
    name: "property",
    initialState: {
        houseDetails: "",
        description: "",
        location: "",
        price: "",
        images: [],
        role: "Sale"
    }, 
    reducers: {
        setHouseDetails(state, action) {
            state.houseDetails = action.payload;
        },
        setDescription(state, action) {
            state.description = action.payload;
        },
        setLocation(state, action) {
            state.location = action.payload;
        },
        setPrice(state, action){
            state.price = action.payload;
        },
        setImages(state, action) {
            state.images.push(action.payload); // Append new base64 image strings to the array
        },
        setRole(state, action){
            state.role = action.payload;
        }
    }
})

export const {
    setHouseDetails, 
    setDescription, 
    setLocation, 
    setPrice, 
    setImages, 
    setRole 
} = PropertySlice.actions;

export default PropertySlice.reducer;