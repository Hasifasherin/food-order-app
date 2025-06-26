// ✅ Updated CartContext with Favorites support

import React, { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const initialState = {
  cart: [],
  favorites: [],
};

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const item = action.payload;
      const exists = state.cart.find((p) => p.id === item.id);
      if (exists) {
        return {
          ...state,
          cart: state.cart.map((p) =>
            p.id === item.id ? { ...p, qty: p.qty + 1 } : p
          ),
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...item, qty: 1 }],
      };
    }
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };

    case "INCREASE_QTY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload ? { ...item, qty: item.qty + 1 } : item
        ),
      };

    case "DECREASE_QTY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload && item.qty > 1
            ? { ...item, qty: item.qty - 1 }
            : item
        ),
      };

    case "MOVE_TO_FAVORITES":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };

    case "REMOVE_FROM_FAVORITES":
      return {
        ...state,
        favorites: state.favorites.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        favorites: state.favorites,
        dispatch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);