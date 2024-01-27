import axios from "axios"
import { jwtDecode } from "jwt-decode";

// Headers
export const headers = {
    'Content-Type': 'application/json',
  }

// Post request 
export const postRequest = async (url, data) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_CONNECTION_URI}/${url}`, data);
        return response;
    } catch (error) {
        throw error;
    }
}

// get request
export const getRequest = async (url, headers) => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_CONNECTION_URI}/${url}`, { headers });
    return response;
  } catch (error) {
    throw error;
  }
}

// delete response
export const deleteRequest = async (url) => {
  try {
    const response = await axios.delete(`${process.env.REACT_APP_CONNECTION_URI}/${url}`, {headers});
    return response;
  } catch (error) {
    console.error('Error in delete request:', error);
  }
}

// delete response
export const putRequest = async (url, data) => {
  try {
    const response = await axios.put(`${process.env.REACT_APP_CONNECTION_URI}/${url}`, data);
    return response;
  } catch (error) {
    console.error('Error in put request:', error);
  }
}


// decoded token
export const decodedToken = () => {
    try {
      const token = localStorage.getItem('jwt');
      const decodedToken = jwtDecode(token);
      const currentTime = Date.now() / 1000; // Convert to seconds
      if (decodedToken.exp < currentTime) {
        // Token has expired
        // Perform logout or redirect to the login page
        localStorage.removeItem('jwt'); // Clear the expired token from local storage
        // return null;
      }
  
      return decodedToken;
    } catch (error) {
      console.error('Invalid token:', error);
      return null;
    }
  };