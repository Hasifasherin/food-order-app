import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import CartPage from "./pages/Cart";
import { CartProvider } from "./context/CartContext";
import { DarkModeProvider } from "./context/DarkModeContext";
import Profile from "./pages/Profile";
import Admin from "./pages/Admin";
import AdminDashboard from "./pages/AdminDashboard";
import { ManageOrders } from "./pages/ManageOrders";
import { ManageUsers } from "./pages/ManageUsers";
import { ManageCoupons } from "./pages/ManageCoupons";

export default function App() {
  return (
    <DarkModeProvider>
      <CartProvider>
        <Router>
          <div className="min-h-screen flex flex-col dark:bg-gray-900 dark:text-white">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/profile" element={<Profile />} />
                {/* Admin Routes */}
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/admin/products" element={<Admin />} />
                <Route path="/admin/orders" element={<ManageOrders />} />
                <Route path="/admin/users" element={<ManageUsers />} />
                <Route path="/admin/coupons" element={<ManageCoupons />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </DarkModeProvider>
  );
}
