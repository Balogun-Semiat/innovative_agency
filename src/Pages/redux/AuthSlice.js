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
        //    redirect("/")
        },

    }
})

export const {login, logout} = AuthSlice.actions

export default AuthSlice.reducer