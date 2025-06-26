import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-yellow-700 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">CleanBite</h1>
      <ul className="flex gap-6">
        <li><Link to="/" className="hover:underline">Home</Link></li>
        <li><Link to="/menu" className="hover:underline">Menu</Link></li>
        <li><Link to="/cart" className="hover:underline">Cart</Link></li>
        <li><Link to="/profile" className="hover:underline">Profile</Link></li>
      </ul>
    </nav>
  );
}