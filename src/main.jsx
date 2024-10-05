import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { configureStore } from "@reduxjs/toolkit";
import {Provider} from "react-redux"
import AuthReducer from "./Pages/redux/AuthSlice.js"
import PropertyReducer from "./Pages/redux/PropertySlice.js"
import LoadReducer from "./Pages/redux/LoadingSlice.js"

const store = configureStore({
  reducer: {
    auth: AuthReducer,
    property: PropertyReducer,
    LoadingSlice: LoadReducer,  // Added loading reducer for loading state
  }
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store = {store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
