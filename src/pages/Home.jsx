import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="text-center py-12">
    <h2 className="text-3xl font-bold mb-4">Welcome to Food Order App</h2>
    <p className="mb-6 text-gray-600">Browse our delicious meals!</p>
    <Link to="/menu">
      <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md">
        Go to Menu
      </button>
    </Link>
  </div>
);

export default Home;
