import React from "react";
import products from "../data/products";
import { FaStar } from "react-icons/fa";

export default function Menu() {
  return (
    <div className="bg-yellow-50 min-h-screen px-6 py-10">
      <h1 className="text-3xl font-bold text-center text-yellow-800 mb-8">Our Full Menu</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-1">{item.name}</h2>
              <p className="text-sm text-gray-600 mb-2">{item.desc}</p>
              <div className="flex text-yellow-500 mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={i < item.rating ? "" : "text-gray-300"}
                  />
                ))}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-yellow-700 font-bold text-lg">{item.price}</span>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-1 text-sm rounded-full">
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
