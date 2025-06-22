import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-yellow-700 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">CleanBite</h1>
      <ul className="flex gap-6">
        <li className="hover:underline cursor-pointer">Home</li>
        <li className="hover:underline cursor-pointer">Menu</li>
        <li className="hover:underline cursor-pointer">Cart</li>
        <li className="hover:underline cursor-pointer">Profile</li>
      </ul>
    </nav>
  );
}
