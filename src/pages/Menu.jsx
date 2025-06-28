import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import products from "../data/products";
import Categories from "../components/Categories";
import { FaStar } from "react-icons/fa";
import { useCart } from "../context/CartContext";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Menu() {
  const location = useLocation();
  const query = useQuery();
  const navigate = useNavigate();
  const { dispatch } = useCart();

  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    const newCategory = query.get("category") || "";
    setCategory(newCategory);
  }, [location]);

  const categories = [...new Set(products.map((item) => item.category))];

  const filteredItems = products.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (category === "" || item.category === category)
  );

  return (
    <div className="bg-yellow-50 dark:bg-gray-900 min-h-screen px-6 py-10 text-gray-800 dark:text-white">
      <Categories />

      {/* Search and dropdown filter section */}
      <div className="flex flex-col md:flex-row gap-4 my-6">
        <input
          type="text"
          placeholder="Search food..."
          className="p-2 rounded border w-full md:w-1/2 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="p-2 rounded border w-full md:w-1/3 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((cat, idx) => (
            <option key={idx} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {/* Product listing */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
          >
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-1">{item.name}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{item.desc}</p>
              <div className="flex text-yellow-500 mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className={i < item.rating ? "" : "text-gray-300 dark:text-gray-600"} />
                ))}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-yellow-700 dark:text-yellow-400 font-bold text-lg">{item.price}</span>
                <button
                  onClick={() => {
                    dispatch({ type: "ADD_TO_CART", payload: item });
                  }}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-1 text-sm rounded-full"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
