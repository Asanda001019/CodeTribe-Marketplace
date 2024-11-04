// pages/RateUs.js
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const RateUs = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the submission logic here, e.g., sending the data to a backend or JSON server
    alert(`Thank you for your feedback! You rated us ${rating} stars.`);
    setRating(0); // Reset rating
    setComment(''); // Reset comment
  };

  return (
    <div className="max-w-lg mx-auto mt-10 bg-gray-800 text-white p-8 rounded-md shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-6">Rate Us</h2>
      <div className="flex justify-center mb-4">
        {[...Array(5)].map((_, index) => {
          const currentRating = index + 1;
          return (
            <FaStar
              key={index}
              size={30}
              className={`cursor-pointer ${
                currentRating <= (hover || rating) ? 'text-yellow-400' : 'text-gray-500'
              }`}
              onClick={() => setRating(currentRating)}
              onMouseEnter={() => setHover(currentRating)}
              onMouseLeave={() => setHover(null)}
            />
          );
        })}
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          placeholder="Leave a comment (optional)"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-yellow-400"
          rows="4"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default RateUs;
