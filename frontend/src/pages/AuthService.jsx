import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

// Register a new user
export const registerUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/register`, { email, password });
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error.response?.data?.error || error.message);
    throw error;
  }
};

// Login user and get token
export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    const { token } = response.data;

    // Save the token to local storage
    localStorage.setItem('authToken', token);

    return response.data;
  } catch (error) {
    console.error('Error logging in:', error.response?.data?.error || error.message);
    throw error;
  }
};

// Logout user (just clear the token)
export const logoutUser = () => {
  localStorage.removeItem('authToken');
  console.log('Logged out successfully!');
};
