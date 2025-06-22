import React from "react";

export default function Footer() {
  return (
    <footer className="px-6 py-6 bg-yellow-700 text-white text-center">
      <div className="mb-2">
        <a href="#" className="hover:underline px-2">About Us</a>|
        <a href="#" className="hover:underline px-2">Contact</a>|
        <a href="#" className="hover:underline px-2">Careers</a>|
        <a href="#" className="hover:underline px-2">FAQ</a>
      </div>
      <div className="mb-2">
        Follow us: <span className="font-semibold">Instagram • Twitter • Facebook</span>
      </div>
      <p className="text-sm mt-2">
        🌱 Made with love & greens from <strong>CleanBite India</strong>
      </p>
    </footer>
  );
}
