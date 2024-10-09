import { createSlice } from "@reduxjs/toolkit";


export const AuthSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: false,
    },
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
            localStorage.removeItem('token');
            console.log("isauth", state.isAuthenticated)
        //    redirect("/")
        },
    }
})

export const {login, logout, checkAuth} = AuthSlice.actions

export default AuthSlice.reducer