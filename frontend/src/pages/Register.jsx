// components/RegisterForm.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    // Handle register logic here
  };

  return (
    <div className="max-w-md mx-auto bg-gray-800 p-8 mt-10 rounded-md shadow-md text-white">
      <h2 className="text-2xl font-semibold text-center mb-6">Register</h2>
      <form onSubmit={handleRegister} className="space-y-4">
        <div className="flex items-center bg-gray-700 p-2 rounded-md">
          <FaUser className="mr-2 text-gray-400" />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-transparent text-white outline-none"
            required
          />
        </div>
        <div className="flex items-center bg-gray-700 p-2 rounded-md">
          <FaLock className="mr-2 text-gray-400" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-transparent text-white outline-none"
            required
          />
        </div>
        <div className="flex items-center bg-gray-700 p-2 rounded-md">
          <FaLock className="mr-2 text-gray-400" />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full bg-transparent text-white outline-none"
            required
          />
        </div>
        <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-md">
          Register
        </button>
      </form>
      <p className="text-center mt-4 text-gray-400">
        Already have an account? <Link to="/login" className="text-blue-400 hover:underline">Log in here</Link>
      </p>
    </div>
  );
};

export default RegisterForm;
