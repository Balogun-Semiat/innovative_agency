import { createSlice } from "@reduxjs/toolkit";


export const AuthSlice = createSlice({
    name: 'auth',
    initialState: {
        token: localStorage.getItem('token') || null,
        isAuthenticated: !!localStorage.getItem('token'), // true if token exists
        user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null, // Check if user exists before parsing
    },
    reducers: {
        login(state, action) {
            // state.isAuthenticated = !!action.payload.token ;
            state.token = action.payload.token;
            state.isAuthenticated = true ;
            state.user = action.payload.user;
        
            // localStorage.setItem('user', JSON.stringify(action.payload.user)); // Store user in localStorage
            // console.log("isauth", state.isAuthenticated)
        },
        logout(state) {
            state.isAuthenticated = false;
            state.user = null;
            state.token = null;
            localStorage.removeItem('userLastName');
            localStorage.removeItem('token');
            // console.log("isauth", state.isAuthenticated)
        },
    }
})

export const {login, logout, checkAuth} = AuthSlice.actions

export default AuthSlice.reducer