import React from "react";
import { GiHamburgerMenu, GiFrenchFries, GiFruitBowl, GiCakeSlice } from "react-icons/gi";
import { FaIceCream } from "react-icons/fa";
import { MdOutlineRamenDining } from "react-icons/md";

const categories = [
{ name: "Burgers", icon: <GiHamburgerMenu size={40} /> },
  { name: "Desserts", icon: <GiCakeSlice size={40} /> },
  { name: "Salads", icon: <GiFruitBowl size={40} /> },
  { name: "Sides", icon: <GiFrenchFries size={40} /> },
  { name: "Ice Cream", icon: <FaIceCream size={40} /> },
  { name: "Noodles", icon: <MdOutlineRamenDining size={40} /> },
];

export default function Categories() {
  return (
    <section className="px-6 py-10 bg-white">
      <h2 className="text-2xl font-bold mb-6 text-center">Browse Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-center">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="flex flex-col items-center p-4 bg-yellow-50 rounded-xl shadow hover:shadow-md cursor-pointer transition"
          >
            <div className="text-yellow-600 mb-2">{cat.icon}</div>
            <p className="font-semibold">{cat.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
