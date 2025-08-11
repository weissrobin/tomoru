'use client'
import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item, quantity) => {
    if(cartItems.filter(cartItem => cartItem.name === item.name).length > 0) {
      const indexOfItem = cartItems.findIndex(cartItem => cartItem.name === item.name);
      const updatedItems = cartItems.map((item, index) => {
        if(index == indexOfItem) {
          return {
            ...item,
            quantity: item.quantity += quantity
          }
        }
      })
      setCartItems(updatedItems);
    } else {
      setCartItems(prev => [...prev, { ...item, quantity }]);
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
        {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);