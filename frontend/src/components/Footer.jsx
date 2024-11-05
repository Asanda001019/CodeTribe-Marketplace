// components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6 border-t border-gray-700">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Logo and Description */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-lg font-semibold text-white">CodeTribe Marketplace</h2>
          <p className="text-sm text-gray-400 mt-1">
            Your go-to place for all your shopping needs!
          </p>
        </div>

        {/* Footer Links */}
        <div className="flex space-x-4">
          <Link to="/" className="text-gray-300 hover:text-white">
            Home
          </Link>
          <Link to="/products" className="text-gray-300 hover:text-white">
            Products
          </Link>
          <Link to="/cart" className="text-gray-300 hover:text-white">
            Cart
          </Link>
          <Link to="/checkout" className="text-gray-300 hover:text-white">
            Checkout
          </Link>
          <Link to="/rate-us" className="text-gray-300 hover:text-white">
            Rate Us
          </Link>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 text-gray-400">
          <a href="https://facebook.com" aria-label="Facebook" className="hover:text-white">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" aria-label="Twitter" className="hover:text-white">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" aria-label="Instagram" className="hover:text-white">
            <FaInstagram />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center md:text-right text-gray-400 text-sm">
          © {new Date().getFullYear()} CodeTibe 2024. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
