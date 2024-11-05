// ProductDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAllProducts } from '../ProductService';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getAllProducts();
        console.log("Fetched products:", data); // Log fetched products
        const selectedProduct = data.find((item) => item.id === id); // No need to convert to Number
    
        console.log("Selected product:", selectedProduct); // Log selected product
        setProduct(selectedProduct);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [id]);

  const handleAddToCart = () => {
    console.log(`Added ${quantity} of ${product.title} to cart`);
    // Logic to add the product to the cart should be implemented here
  };

  if (!product) {
    return <div className="text-center">Product not found or loading...</div>;
  }

  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-8">
      <img src={product.imageURL} alt={product.title} className="w-full h-48 object-cover mb-4" />
      <h2 className="text-2xl font-semibold mb-2">{product.title}</h2>
      <p className="text-gray-700 mb-4">{product.description}</p>
      <p className="font-bold text-lg mb-4">${product.price}</p>
      <div className="flex items-center mb-4">
        <label className="mr-2">Quantity:</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          min="1"
          className="border rounded w-16 text-center"
        />
      </div>
      <button
        onClick={handleAddToCart}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetails;
