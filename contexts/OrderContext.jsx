'use client'
import { createContext, useState, useContext } from 'react';

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orderItems, setOrderItems] = useState([]);

  const saveOrderStorage = (order) => {
    localStorage.setItem('order', JSON.stringify(order));
  }

  const addToOrder = (item, quantity) => {
    if(orderItems.filter(orderItem => orderItem.name === item.name).length > 0) {
      const indexOfItem = orderItems.findIndex(orderItem => orderItem.name === item.name);
      const updatedItems = orderItems.map((item, index) => {
        if(index == indexOfItem) {
          return {
            ...item,
            quantity: item.quantity + quantity
          };
        } else {
          return {
            ...item
          }
        }
      });
      setOrderItems(updatedItems);
      saveOrderStorage(updatedItems);
    } else {
      setOrderItems(prev => {
        const newOrder = [...prev, { ...item, quantity }];
        saveOrderStorage(newOrder);
        return newOrder;
      });
    }
  };

  const removeFromOrder = (name) => {
      const indexOfItem = orderItems.findIndex(orderItem => orderItem.name === name);
      const updatedItems = orderItems.splice(indexOfItem, 1);
      setOrderItems(updatedItems);
      saveOrderStorage(updatedItems);
  }

  return (
    <OrderContext.Provider value={{ orderItems, addToOrder, removeFromOrder }}>
        {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => useContext(OrderContext);