import React from "react";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cart, dispatch } = useCart();

  const total = cart.reduce((acc, item) => acc + parseFloat(item.price.replace("$", "")) * item.qty, 0).toFixed(2);

  return (
    <div className="px-6 py-10">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center mb-4 p-4 bg-white shadow rounded">
              <div className="w-2/3">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-500">Price: {item.price}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => dispatch({ type: "DECREASE_QTY", payload: item.id })}
                  className="px-2 py-1 bg-gray-200 rounded"
                  disabled={item.qty === 1}
                >
                  -
                </button>
                <span>{item.qty}</span>
                <button
                  onClick={() => dispatch({ type: "INCREASE_QTY", payload: item.id })}
                  className="px-2 py-1 bg-gray-200 rounded"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item.id })}
                className="text-red-600 text-sm underline ml-4"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="text-right mt-6">
            <p className="text-lg font-semibold">Total: ${total}</p>
            <button
              onClick={() => dispatch({ type: "CLEAR_CART" })}
              className="mt-2 bg-red-500 text-white px-4 py-2 rounded"
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
