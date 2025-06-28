import React from "react";
import { FaHeart, FaStar } from "react-icons/fa";
import products from "../data/products";
import { useCart } from "../context/CartContext";

export default function PopularItems() {
  const { dispatch, favorites } = useCart();

  const isFavorite = (id) => favorites.some((item) => item.id === id);

  return (
    <section className="px-6 py-10 bg-yellow-50">
      <h2 className="text-2xl font-bold mb-6 text-center">Popular Items</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden relative group"
          >
            {/* ❤️ Favorite Icon */}
            <button
              className={`absolute top-3 right-3 z-10 ${
                isFavorite(item.id) ? "text-red-500" : "text-gray-400"
              }`}
              onClick={() =>
                dispatch({ type: "MOVE_TO_FAVORITES", payload: item })
              }
            >
              <FaHeart size={18} />
            </button>

            <div className="w-full h-48 bg-white flex items-center justify-center">
            <img
              src={item.image}
              alt={item.name}
              className="h-40 object-contain"
            />
          </div>


            <div className="p-4">
              <h3 className="font-semibold text-lg">{item.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{item.desc}</p>

              <div className="flex text-yellow-500 mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={i < item.rating ? "" : "text-gray-300"}
                  />
                ))}
              </div>

              <div className="flex items-center justify-between">
                <span className="text-yellow-700 font-bold text-lg">
                  {item.price}
                </span>
                <button
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-1 text-sm rounded-full shadow"
                  onClick={() =>
                    dispatch({ type: "ADD_TO_CART", payload: item })
                  }
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
