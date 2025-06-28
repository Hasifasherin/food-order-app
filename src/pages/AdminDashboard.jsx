import React from "react";
import { Link } from "react-router-dom";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">📊 Admin Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h2 className="text-xl font-semibold mb-2">Total Products</h2>
            <p className="text-3xl font-bold text-yellow-600">24</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h2 className="text-xl font-semibold mb-2">Total Orders</h2>
            <p className="text-3xl font-bold text-yellow-600">102</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h2 className="text-xl font-semibold mb-2">Registered Users</h2>
            <p className="text-3xl font-bold text-yellow-600">18</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link to="/admin/products" className="bg-yellow-100 hover:bg-yellow-200 text-yellow-800 p-6 rounded-xl shadow text-center">🍔 Manage Products</Link>
          <Link to="/admin/orders" className="bg-yellow-100 hover:bg-yellow-200 text-yellow-800 p-6 rounded-xl shadow text-center">🧾 View Orders</Link>
          <Link to="/admin/users" className="bg-yellow-100 hover:bg-yellow-200 text-yellow-800 p-6 rounded-xl shadow text-center">👥 Manage Users</Link>
          <Link to="/admin/coupons" className="bg-yellow-100 hover:bg-yellow-200 text-yellow-800 p-6 rounded-xl shadow text-center">🎁 Manage Coupons</Link>
          <Link to="/admin/settings" className="bg-yellow-100 hover:bg-yellow-200 text-yellow-800 p-6 rounded-xl shadow text-center">⚙️ Admin Settings</Link>
        </div>
      </div>
    </div>
  );
}
