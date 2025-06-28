
import React, { useState } from "react";
import { useCart } from "../context/CartContext";

export default function Profile() {
  const { favorites, dispatch } = useCart();

  const [editingProfile, setEditingProfile] = useState(false);
  const [profile, setProfile] = useState({
    name: "Arathi",
    email: "arathi@example.com",
    phone: "+91 989765555678",
  });

  const [addresses, setAddresses] = useState([
    { label: "Home", address: " Main Street, Chennai", default: true },
    { label: "Work", address: "Tech Park, Block B, Level 3" },
  ]);
  const [addingAddress, setAddingAddress] = useState(false);

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

  const handleProfileSave = () => setEditingProfile(false);
  const handleAddAddress = () => setAddingAddress(false);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 px-6 py-10 text-gray-800 dark:text-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">

        {/* Fixed Sidebar Buttons */}
        <div className="w-full lg:w-1/4">
          <div className="lg:sticky lg:top-24 space-y-3">
            {["Payment Methods", "Notifications & Preferences", "Coupons & Rewards", "Account Settings", "Help & Support", "Logout"].map((label, index) => (
              <button
                key={index}
                className="w-full bg-yellow-100 hover:bg-yellow-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-yellow-800 dark:text-white px-4 py-2 rounded text-left"
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full lg:w-3/4 space-y-10">
          <h2 className="text-3xl font-bold">My Account</h2>

          {/* 👤 User Info */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-4">👤 Profile Information</h3>
            <div className="flex items-center gap-4 mb-4">
              <img
                src="https://ui-avatars.com/api/?name=Arathi"
                alt="Profile"
                className="w-16 h-16 rounded-full border"
              />
              {editingProfile ? (
                <div className="space-y-2 w-full">
                  <input
                    className="border rounded px-3 py-1 w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    value={profile.name}
                    onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                  />
                  <input
                    className="border rounded px-3 py-1 w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    value={profile.email}
                    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                  />
                  <input
                    className="border rounded px-3 py-1 w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    value={profile.phone}
                    onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                  />
                  <button
                    onClick={handleProfileSave}
                    className="mt-2 bg-green-500 text-white px-4 py-1 rounded"
                  >
                    Save Profile
                  </button>
                </div>
              ) : (
                <div>
                  <p><strong>Name:</strong> {profile.name}</p>
                  <p><strong>Email:</strong> {profile.email}</p>
                  <p><strong>Phone:</strong> {profile.phone}</p>
                </div>
              )}
            </div>
            {!editingProfile && (
              <button
                onClick={() => setEditingProfile(true)}
                className="mt-2 bg-yellow-500 text-white px-4 py-2 rounded shadow hover:bg-yellow-600"
              >
                Edit Profile
              </button>
            )}
          </div>

          {/* 🏠 Delivery Addresses */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-4">🏠 Delivery Addresses</h3>
            {addresses.map((addr, idx) => (
              <div key={idx} className="flex justify-between items-center border-b py-2 dark:border-gray-700">
                <div>
                  <p className="font-semibold">{addr.label}</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{addr.address}</p>
                </div>
                {addr.default && <span className="text-green-600 text-sm">Default</span>}
              </div>
            ))}
            {addingAddress ? (
              <div className="mt-4 space-y-2">
                <input placeholder="Label (e.g., Home)" className="border px-2 py-1 rounded w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
                <input placeholder="Full Address" className="border px-2 py-1 rounded w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
                <button
                  onClick={handleAddAddress}
                  className="bg-green-500 text-white px-4 py-1 rounded"
                >
                  Save Address
                </button>
              </div>
            ) : (
              <button
                onClick={() => setAddingAddress(true)}
                className="mt-3 bg-yellow-500 text-white px-4 py-2 rounded shadow hover:bg-yellow-600"
              >
                Add New Address
              </button>
            )}
          </div>

          {/* 📦 Past Orders */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-4">📦 Order History</h3>
            {orders.map((order) => (
              <div key={order.id} className="border-b border-gray-200 dark:border-gray-700 pb-4 mb-4">
                <h4 className="font-bold text-lg">{order.restaurant}</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{order.item}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Delivered on {order.date}</p>
                <p className="text-sm font-semibold">Total Paid: {order.total}</p>
                <div className="mt-2 flex gap-3">
                  <button className="bg-yellow-500 text-white px-3 py-1 rounded text-sm hover:bg-yellow-600">
                    Reorder
                  </button>
                  <button className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white px-3 py-1 rounded text-sm hover:bg-gray-300 dark:hover:bg-gray-600">
                    Help
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}