import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between">
    <h1 className="font-bold text-xl">FoodOrder</h1>
    <div className="space-x-4">
      <Link to="/" className="hover:text-yellow-400">Home</Link>
      <Link to="/menu" className="hover:text-yellow-400">Menu</Link>
    </div>
  </nav>
);

export default Navbar;
