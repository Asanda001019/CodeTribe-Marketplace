// components/LoginForm.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="max-w-md mx-auto bg-gray-800 p-8 mt-10 rounded-md shadow-md text-white">
      <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
      <form onSubmit={handleLogin} className="space-y-4">
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
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md">
          Log In
        </button>
      </form>
      <p className="text-center mt-4 text-gray-400">
        Not registered? <Link to="/register" className="text-blue-400 hover:underline">Create an account</Link>
      </p>
    </div>
  );
};

export default Login;
