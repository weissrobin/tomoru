'use client'
import { useOrder } from '@/contexts/OrderContext';
import { useState, useEffect } from 'react';
import { Alert } from './Alert';

export const AddToOrder = ({ item }) => {
  const { addToOrder } = useOrder();
  const [added, setAdded] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [canAdd, setCanAdd] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if(canAdd) {
        addToOrder(item, quantity);

        setAdded(true);
        setCanAdd(false);
      }
    } catch (e) {
        setAdded(false);
    }
  };

  const handleQuantity = (e) => {
    if(e.target.value <= 0) {
        setQuantity(1);
    } else {
        setQuantity(parseInt(e.target.value) || 1);
    }
  }

  useEffect(() => {
    if (!added) return;

    const timer = setTimeout(() => {
      setAdded(false);
      setCanAdd(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, [added]);

  return (
    <>
    <form className="mt-4 flex gap-4" onSubmit={handleSubmit}>
      <input type="number" min={1} value={quantity} onChange={(e) => handleQuantity(e)} className="max-w-[50px] border text-center border-gray-300 rounded-sm" />
      <button
        type="submit"
        className="hover:cursor-pointer focus:bg-seasalt focus:text-eerie-black block w-full rounded-sm bg-eerie-black px-4 py-3 text-sm font-medium text-seasalt transition hover:scale-105"
      >
        Add to Order
      </button>
    </form>
      {added && (
      <>
        <Alert
          product={item.name}
          price={item.price}
          quantity={quantity}
          message="Product added to order"
          type="success"
        />
      </>
    )}
    </>
  );
};
