// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authSlice'; // Import your auth slice

const store = configureStore({
  reducer: {
    auth: authReducer, // Add the auth reducer
  },
});

export default store;
