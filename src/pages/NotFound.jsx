import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center p-6 bg-white shadow-lg rounded-lg max-w-md">
        <h1 className="text-6xl font-extrabold text-red-500">404</h1>
        <p className="mt-4 text-xl text-gray-700">
          Oops! The page you're looking for doesn't exist.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="text-lg text-blue-600 hover:text-blue-800 font-semibold"
          >
            Go Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;