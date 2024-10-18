import { jwtDecode } from "jwt-decode";
import { logout, login } from "../redux/AuthSlice";
import { useDispatch } from "react-redux";


// This function checks if the token is expired
export const validateToken = (token) => {
  if (!token) return false;

  try {
    const decoded = jwtDecode(token);
    const currentTime = Date.now() / 1000; // Current time in seconds

    if (decoded.exp < currentTime) {
      return false; // Token has expired
    }

    return true; // Token is valid
  } catch (error) {
    console.error('Invalid token:', error);
    return false; // Token is invalid
  }
};


// export const validateToken = () => {
//   const token = localStorage.getItem('token')
//     if(!token) return false;

//     try {
//         const decodedToken = jwtDecode(token);
//         if(!decodedToken.exp) return false;

//         // Convert `exp` from seconds to milliseconds and check if it's expired
//         const isExpired = decodedToken.exp * 1000 < Date.now();
//         return !isExpired; // Return true if the token is still valid, false if expired

//     } catch (error) {
//         console.error('Invalid token:', error);
//         return false; // If decoding fails, consider the token invalid
//     }
// }

// Helper to check token and notify user if expired
// export const checkTokenAndNotify = (token, dispatch, logout) => {
//   // const dispatch = useDispatch()
//   const getToken = localStorage.getItem('token');
//   if (getToken && validateToken(getToken)) {
//     const isFirstLogin = sessionStorage.getItem('isFirstLogin');
//     if(isFirstLogin) {
//       sessionStorage.setItem('isFirstLogin', true); // Set the flag to true
//       toast.success("Logging user in");
//       // dispatch(login({ token }));
//       // Redirect to first login page
//     }
//     return true;
//   } else {
//     // If token is expired or invalid, log out and notify user
//     localStorage.removeItem('token');
//     dispatch(dispatch, () => dispatch(logout()));;
//     alert("Your session has expired. Please log in again.");
//     return false;
//   }
// };

