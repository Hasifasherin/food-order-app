import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [dark, setDark] = useState(false);

  //  Sync theme on toggle
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  //  Load saved theme from localStorage
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") setDark(true);
  }, []);

  return (
    <nav className="bg-yellow-700 dark:bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">CleanBite</h1>
      <ul className="flex gap-6 items-center">
        <li><Link to="/" className="hover:underline">Home</Link></li>
        <li><Link to="/menu" className="hover:underline">Menu</Link></li>
        <li><Link to="/cart" className="hover:underline">Cart</Link></li>
        <li><Link to="/profile" className="hover:underline">Profile</Link></li>
        <li><Link to="/admin" className="hover:underline">Admin</Link></li>
        <li>
          <button
            onClick={() => setDark(!dark)}
            className="px-3 py-1 bg-yellow-400 text-black rounded shadow hover:bg-yellow-300 transition"
            aria-label="Toggle Dark Mode"
          >
            {dark ? "☀ Light" : "🌙 Dark"}
          </button>
        </li>
      </ul>
    </nav>
  );
}
