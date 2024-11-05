import React, { useState } from 'react';
import { addProduct } from '../ProductService';

const AddProductForm = () => {
  const [product, setProduct] = useState({
    title: '',
    description: '',
    price: '',
    imageURL: '',
    availability: true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addProduct(product);
      alert('Product added successfully');
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-8 max-w-md w-full"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">Add New Product</h2>

        <input
          name="title"
          onChange={handleChange}
          value={product.title}
          placeholder="Title"
          required
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />

        <textarea
          name="description"
          onChange={handleChange}
          value={product.description}
          placeholder="Description"
          required
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          rows="4"
        />

        <input
          name="price"
          type="number"
          onChange={handleChange}
          value={product.price}
          placeholder="Price"
          required
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />

        <input
          name="imageURL"
          onChange={handleChange}
          value={product.imageURL}
          placeholder="Image URL"
          required
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProductForm;
