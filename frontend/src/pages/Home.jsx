// pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-20 bg-cover bg-center bg-[url('/path-to-your-background-image.jpg')]">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center text-white">
          Welcome to MyShop
        </h1>
        <p className="text-lg md:text-xl text-gray-300 text-center max-w-2xl mb-6">
          Discover a world of amazing products just for you. High quality, affordable prices, and fast delivery!
        </p>
        <Link
          to="/products"
          className="px-8 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-200"
        >
          Shop Now
        </Link>
      </section>

      {/* Featured Products Section */}
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Featured Products</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Product Card Example */}
          {Array(3).fill('').map((_, index) => (
            <div key={index} className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-700 flex items-center justify-center">
                <img
                  src={`/path-to-product-image-${index + 1}.jpg`}
                  alt={`Product ${index + 1}`}
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">Product Name {index + 1}</h3>
                <p className="text-gray-400 mb-4">A brief description of the product goes here.</p>
                <Link
                  to="/products"
                  className="text-blue-400 hover:underline font-semibold"
                >
                  View Product
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="bg-blue-600 py-16 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Join Our Community</h2>
        <p className="text-lg text-gray-200 max-w-lg mx-auto mb-6">
          Sign up today to receive the latest updates on new arrivals, exclusive deals, and more.
        </p>
        <Link
          to="/register"
          className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-md hover:bg-gray-100 transition duration-200"
        >
          Get Started
        </Link>
      </section> */}
    </div>
  );
};

export default Home;
