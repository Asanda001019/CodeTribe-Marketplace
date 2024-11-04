import React, { useState } from 'react';
import { addProduct } from '../ProductService'; // Ensure this saves data in Firestore

const AddProductForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    imageBase64: '', // Base64 string for image
    availability: true,
  });

  const [imageFile, setImageFile] = useState(null);
  const [message, setMessage] = useState('');

  // Handle input changes for text fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle image file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, imageBase64: reader.result });
      };
      reader.readAsDataURL(file);
      setImageFile(file);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (imageFile) {
      try {
        // Add product data to Firestore
        const response = await addProduct(formData);
        setMessage('Product added successfully!');
        console.log('Product added:', response);

        // Reset form and image state
        setFormData({
          title: '',
          description: '',
          price: '',
          imageBase64: '',
          availability: true,
        });
        setImageFile(null);
      } catch (error) {
        console.error('Error adding product:', error);
        setMessage('Failed to add product. Please try again.');
      }
    } else {
      setMessage('Please select an image to upload.');
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
      {message && <p className="mb-4 text-green-500">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block mb-1 font-semibold">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>
        <div>
          <label htmlFor="description" className="block mb-1 font-semibold">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>
        <div>
          <label htmlFor="price" className="block mb-1 font-semibold">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>
        <div>
          <label htmlFor="image" className="block mb-1 font-semibold">Product Image</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full border rounded p-2"
            required
          />
        </div>
        <div>
          <label htmlFor="availability" className="block mb-1 font-semibold">Availability</label>
          <select
            id="availability"
            name="availability"
            value={formData.availability}
            onChange={(e) => setFormData({ ...formData, availability: e.target.value === 'true' })}
            className="w-full border rounded p-2"
          >
            <option value="true">Available</option>
            <option value="false">Not Available</option>
          </select>
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white rounded p-2 font-semibold hover:bg-blue-600">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProductForm;
