// ✅ Updated Profile.jsx with Favorites section and remove from favorites support

import React from "react";
import { useCart } from "../context/CartContext";

export default function Profile() {
  const { favorites, dispatch } = useCart();

  const orders = [
    {
      id: "ORD123456",
      restaurant: "Pizza Hut",
      item: "Baked Cheesy Momo Non-Veg",
      status: "Delivered",
      date: "Nov 3, 2024, 04:58 PM",
      total: "$12.50",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">My Account</h2>

        {/* User Info */}
        <div className="bg-white p-6 rounded-xl shadow mb-8">
          <h3 className="text-xl font-semibold mb-2">Arshad</h3>
          <p className="text-gray-600">📧 arshad@example.com</p>
          <p className="text-gray-600">📞 +91 6238269435</p>
          <p className="text-gray-600">🏠 Manjeri, Kerala, India</p>
          <button className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded shadow hover:bg-yellow-600">
            Edit Profile
          </button>
        </div>

        {/* Favorites Section */}
        <div className="bg-white p-6 rounded-xl shadow mb-8">
          <h3 className="text-xl font-semibold mb-4">❤️ Favorites</h3>
          {favorites.length === 0 ? (
            <p className="text-gray-500">No favorites yet. Click ❤️ on dishes to add them here.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {favorites.map((item) => (
                <div
                  key={item.id}
                  className="bg-gray-50 rounded-xl shadow-md overflow-hidden"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="font-semibold text-lg">{item.name}</h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                    <div className="mt-2 text-yellow-700 font-bold">{item.price}</div>
                    <button
                      onClick={() => dispatch({ type: "REMOVE_FROM_FAVORITES", payload: item.id })}
                      className="mt-3 bg-red-100 text-red-600 px-3 py-1 rounded text-sm hover:bg-red-200"
                    >
                      Remove from Favorites
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Past Orders */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-4">Past Orders</h3>
          {orders.map((order) => (
            <div key={order.id} className="border-b border-gray-200 pb-4 mb-4">
              <h4 className="font-bold text-lg">{order.restaurant}</h4>
              <p className="text-gray-600 text-sm">{order.item}</p>
              <p className="text-gray-500 text-sm">Delivered on {order.date}</p>
              <p className="text-sm font-semibold">Total Paid: {order.total}</p>
              <div className="mt-2 flex gap-3">
                <button className="bg-yellow-500 text-white px-3 py-1 rounded text-sm hover:bg-yellow-600">
                  Reorder
                </button>
                <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-300">
                  Help
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
