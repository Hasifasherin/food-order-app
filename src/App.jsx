import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
// Add other pages like Cart, Profile if needed

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar /> {/* ✅ ONLY here, not inside pages */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            {/* More routes like Cart, Profile */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
