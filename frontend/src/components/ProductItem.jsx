import React from 'react';
import { Link } from 'react-router-dom';

const ProductItem = ({ product }) => {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg">
      <img src={product.imageURL} alt={product.title} className="w-full h-48 object-cover mb-2" />
      <h2 className="text-lg font-semibold">{product.title}</h2>
      <p className="text-gray-700">{product.description}</p>
      <p className="font-bold mt-2">${product.price}</p>
      <Link to={`/product/${product.id}`}>
        <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default ProductItem;
