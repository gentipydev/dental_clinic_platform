import axios from 'axios';


// Create an axios instance
const http = axios.create({
  baseURL: 'http://localhost:8000/admin-panel/',
});


// Function to login
const userLogin = async (email, password, rememberMe) => {
    console.log("I am here")
    try {
        console.log(email, password, rememberMe)
      const response = await http.post('/api/token/', {
         email: email, 
         password: password,
         remember_me: rememberMe,
        });
      const { access, refresh } = response.data;
      
      // Choose storage based on rememberMe
      const storage = rememberMe ? localStorage : sessionStorage;
      storage.setItem('accessToken', access);
      storage.setItem('refreshToken', refresh);
  
      // Set the access token on the axios instance
      http.defaults.headers.common['Authorization'] = `Bearer ${access}`;
    } catch (error) {
      console.error('Login error', error);
      throw error; // Throw the error to be handled by the caller
    }
  };

  

// Function to refresh the token
const refreshToken = async () => {
  try {
    const refresh = localStorage.getItem('refreshToken');
    const response = await http.post('/api/token/refresh/', { refresh });
    const { access } = response.data;
    
    // Update the access token
    localStorage.setItem('accessToken', access);
    http.defaults.headers.common['Authorization'] = `Bearer ${access}`;
    return access;
  } catch (error) {
    console.error('Token refresh error', error);
    // Handle errors, e.g. redirect to login if refresh fails
  }
};


// Response interceptor to refresh token on receiving a 401 response
http.interceptors.response.use(
    response => response,
    async error => {
    console.error('Axios error', error);
      if (error.response) {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;
          const newAccessToken = await refreshToken();
          originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
          return http(originalRequest);
        }
      } else {
        console.error('Error without response object', error);
      }
      return Promise.reject(error);
    }
  );
  

export default http;
export { refreshToken, userLogin };


