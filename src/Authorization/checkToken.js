export const checkTokenAndNotify = (token, dispatch, logout) => {
    // const token = localStorage.getItem('token');
    if (token && isTokenValid(token)) {
        console.log(token)
      const isFirstLogin = sessionStorage.getItem('isFirstLogin');
      if(isFirstLogin) {
        sessionStorage.setItem('isFirstLogin', true); // Set the flag to true
        toast.success("Logging user in");
        dispatch(login({ token }));
        // Redirect to first login page
      }
      return true;
    } else {
      // If token is expired or invalid, log out and notify user
      localStorage.removeItem('token');
      dispatch(logout());
      alert("Your session has expired. Please log in again.");
      return false;
    }
  };