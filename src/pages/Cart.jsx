import React from "react";
import { useCart } from "../context/CartContext";
import { FaHeart, FaPlus, FaMinus } from "react-icons/fa";

export default function CartPage() {
  const { cart, dispatch } = useCart();

  const total = cart.reduce(
    (acc, item) =>
      acc + parseFloat(item.price.replace(/[^0-9.]/g, "")) * item.qty,
    0
  );

  const deliveryFee = 2;
  const totalWithDelivery = (total + deliveryFee).toFixed(2);

  return (
    <div className="px-6 py-10 bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-800 dark:text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Your Cart</h2>

        {cart.length === 0 ? (
          <div className="bg-white dark:bg-gray-800 shadow rounded-xl p-8 text-center">
            <h3 className="text-xl font-semibold mb-2">🛒 Cart Empty</h3>
            <p className="text-gray-500 dark:text-gray-300">
              Good food is always cooking! Go ahead and order something
              delicious.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Cart Items */}
            <div className="md:col-span-2 space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between bg-white dark:bg-gray-800 shadow p-4 rounded-xl"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 rounded object-cover"
                    />
                    <div>
                      <h4 className="font-bold">{item.name}</h4>
                      <p className="text-gray-500 dark:text-gray-300 text-sm">
                        {item.desc}
                      </p>
                      <div className="mt-2 flex items-center gap-3">
                        {/* Quantity controls */}
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() =>
                              dispatch({ type: "DECREASE_QTY", payload: item.id })
                            }
                            className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded"
                          >
                            <FaMinus size={12} />
                          </button>
                          <span>{item.qty}</span>
                          <button
                            onClick={() =>
                              dispatch({ type: "INCREASE_QTY", payload: item.id })
                            }
                            className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded"
                          >
                            <FaPlus size={12} />
                          </button>
                        </div>

                        {/* Remove button */}
                        <button
                          onClick={() =>
                            dispatch({ type: "REMOVE_FROM_CART", payload: item.id })
                          }
                          className="bg-red-100 dark:bg-red-800 text-red-600 dark:text-red-200 text-sm px-3 py-1 rounded-full shadow hover:bg-red-200 hover:text-red-700 transition"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                  <span className="text-yellow-700 dark:text-yellow-400 font-bold">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>

            {/*  Summary Box */}
            <div className="bg-white dark:bg-gray-800 p-6 shadow rounded-xl">
              <h3 className="text-lg font-semibold mb-4">Bill Details</h3>
              <div className="flex justify-between mb-2">
                <span>Item Total</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Delivery Fee</span>
                <span>₹{deliveryFee.toFixed(2)}</span>
              </div>
              <hr className="my-2 border-gray-300 dark:border-gray-700" />
              <div className="flex justify-between font-bold text-lg">
                <span>To Pay</span>
                <span>₹{totalWithDelivery}</span>
              </div>
              <button className="w-full mt-6 bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-xl font-semibold">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
