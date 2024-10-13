import { createSlice } from "@reduxjs/toolkit";


export const AuthSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: false,
        token: null,
    },
    reducers: {
        login(state, action) {
            state.isAuthenticated = !!action.payload.token ;
            state.token = action.payload.token;
            console.log("isauth", state.isAuthenticated)
        },
        logout(state) {
            state.isAuthenticated = false;
            state.token = null;
            localStorage.removeItem('token');
            console.log("isauth", state.isAuthenticated)
        //    redirect("/")
        },
    }
})

export const {login, logout, checkAuth} = AuthSlice.actions

export default AuthSlice.reducer