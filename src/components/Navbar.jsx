import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") setDark(true);
  }, []);

  return (
    <nav className="bg-yellow-700 text-white px-6 py-4 flex justify-between items-center dark:bg-gray-900">
      <h1 className="text-2xl font-bold">CleanBite</h1>
      <ul className="flex gap-6 items-center">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/admin">Admin</Link></li>
        <li>
          <button
            onClick={() => setDark(!dark)}
            className="px-2 py-1 bg-yellow-500 text-black rounded text-sm"
          >
            {dark ? "☀ Light" : "🌙 Dark"}
          </button>
        </li>
      </ul>
    </nav>
  );
}
