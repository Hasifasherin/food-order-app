import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Categories from "../components/Categories";
import PopularItems from "../components/PopularItems";
import Reviews from "../components/Reviews";
import Offers from "../components/Offers";

export default function Home() {
  return (
    <div className="bg-yellow-50 dark:bg-gray-900 text-gray-800 dark:text-white font-sans">
      <Hero />

      {/* Search and Location Bar */}
      <section className="px-6 py-4 flex flex-col md:flex-row gap-4 items-center justify-center">
        <input
          type="text"
          placeholder="Search food, cuisines, or restaurants..."
          className="w-full md:w-1/2 px-4 py-2 border rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:text-white"
        />
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-xl">
          📍 Change Location
        </button>
      </section>

      <Features />
      <Categories />
      <PopularItems />
      <Reviews />
      <Offers />
    </div>
  );
}
