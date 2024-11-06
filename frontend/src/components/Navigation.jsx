// components/Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../AuthContext'; // Import useAuth

const Navigation = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-white text-lg font-semibold">
          CodeTribe 
        </Link>
        
        {/* Links */}
        <div className="flex space-x-4">
          {!isAuthenticated ? (
            <>
              <Link to="/register" className="text-gray-300 hover:text-white">Register</Link>
              <Link to="/login" className="text-gray-300 hover:text-white">Login</Link>
            </>
          ) : (
            <>
              <Link to="/products" className="text-gray-300 hover:text-white">Products</Link>
              <Link to="/add-product" className="text-gray-300 hover:text-white">Add Product</Link>
              <Link to="/cart" className="text-gray-300 hover:text-white">Cart</Link>
              <Link to="/checkout" className="text-gray-300 hover:text-white">Checkout</Link>
              <Link to="/rate-us" className="text-gray-300 hover:text-white">Rate Us</Link>
              <button onClick={logout} className="text-gray-300 hover:text-white">Logout</button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
