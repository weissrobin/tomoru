'use client'
import { useCart } from '@/contexts/CartContext';

export const Cart = () => {
  const { cartItems } = useCart();

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item, i) => (
            <li key={i}>{item.name} - {item.price}</li>
          ))}
        </ul>
      )}
    </div>
  );
};