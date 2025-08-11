'use client'
import { useCart } from '@/contexts/CartContext';
import { useState } from 'react';
import { Alert } from './Alert';

export const AddToCart = ({ item }) => {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
        addToCart(item, quantity);
        setAdded(true);
    } catch (e) {
        setAdded(false);
    }
  };

  const handleQuantity = (e) => {
    console.log(parseInt(e.target.value));
    if(e.target.value <= 0) {
        setQuantity(1);
        console.log(parseInt(e.target.value));
    } else {
        setQuantity(parseInt(e.target.value) || 1);
    }
  }

  return (
    <>
    <form className="mt-4 flex gap-4" onSubmit={handleSubmit}>
      <input type="number" min={1} value={quantity} onChange={(e) => handleQuantity(e)} className="max-w-[50px] border text-center border-gray-300 rounded-sm" />
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
