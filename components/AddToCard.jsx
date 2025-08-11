'use client'
import { useCart } from '@/contexts/CartContext';
import { useState } from 'react';
import { Alert } from './Alert';

export const AddToCart = ({ item }) => {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
        addToCart(item);
        setAdded(true);
    } catch (e) {
        setAdded(false);
    }
  };

  return (
    <>
    <form className="mt-4 flex gap-4" onSubmit={handleSubmit}>
      <button
        type="submit"
        className="hover:cursor-pointer focus:bg-seasalt focus:text-eerie-black block w-full rounded-sm bg-eerie-black px-4 py-3 text-sm font-medium text-seasalt transition hover:scale-105"
      >
        Add to Cart
      </button>
    </form>
      {added && (
      <>
        <Alert
          product={item.name}
          price={item.price}
          message="Product added to cart"
          type="success"
        />
      </>
    )}
    </>
  );
};
