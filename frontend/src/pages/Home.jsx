import React from 'react';
import { Link } from 'react-router-dom';
import homeContent from './homeContent'; // Adjust path if needed

const Home = () => {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-20 bg-cover bg-center bg-[url('/images/background.jpg')]">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center text-white">
          Welcome to CodeTribe Marketplace
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
      <section className="container mx-auto py-8 px-4"> {/* Reduced padding to py-8 */}
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Featured Products</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Map over productList to generate each card */}
          {homeContent.map((product) => (
            <div key={product.id} className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-700 flex items-center justify-center">
                <img
                  src={product.imageURL}
                  alt={product.title}
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">{product.title}</h3>
                <p className="text-gray-400 mb-4">{product.description}</p>
                <p className="text-lg font-bold text-white">R{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
