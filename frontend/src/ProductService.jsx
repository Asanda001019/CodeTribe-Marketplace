import axios from 'axios';

const API_URL = 'http://localhost:5000/api/products'; // Replace with your actual backend URL

// Function to fetch all products
export const getAllProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching all products:', error);
    throw error;
  }
};

// Function to fetch a single product by ID
export const getProductById = async (productId) => {
  try {
    const response = await axios.get(`${API_URL}/${productId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching product by ID:', error);
    throw error;
  }
};

// Function to create a new product
export const createProduct = async (productData) => {
  try {
    const response = await axios.post(`${API_URL}/create`, productData);
    return response.data;
  } catch (error) {
    console.error('Error creating product:', error);
    throw error;
  }
};

// Function to update a product
export const updateProduct = async (productId, updatedData) => {
  try {
    const response = await axios.put(`${API_URL}/${productId}`, updatedData);
    return response.data;
  } catch (error) {
    console.error('Error updating product:', error);
    throw error;
  }
};

// Function to delete a product
export const deleteProduct = async (productId) => {
  try {
    const response = await axios.delete(`${API_URL}/${productId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting product:', error);
    throw error;
  }
};

// Function to hide/show a product (toggle visibility)
export const toggleProductVisibility = async (productId, isVisible) => {
  try {
    const response = await axios.patch(`${API_URL}/${productId}`, { isVisible });
    return response.data;
  } catch (error) {
    console.error('Error toggling product visibility:', error);
    throw error;
  }
};
