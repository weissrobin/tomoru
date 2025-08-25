'use client'

import { useEffect, useState } from "react";
import { OrderItem } from "./OrderItem";
import { IconShoppingBagX } from '@tabler/icons-react';
import Link from "next/link";

// ? This could be handled by session (from database or external tool) || Since I dont have a database running for this project 
// ? I decided to simulate this with localStorage PS: There wont be a delay for loading items...since It would be done on the server (if it was made with database)

export const Order = () => {
  const [orderItems, setOrderItems] = useState([]);
  const [price, setPrice] = useState();

  const inputClass = 'bg-white rounded-sm w-full py-1 px-2 focus-visible:outline-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 border border-[#00000038]';
  const labelClass = 'font-resist-regular';

  const renderOrder = () => {
    const storedOrder = JSON.parse(localStorage.getItem('order'));
    if(storedOrder) {
      setOrderItems(() => {
        setPrice(storedOrder.reduce((acc, item) => acc + item.price, 0));
        return storedOrder;
      });
    }
  }
  
  useEffect(() => {
    renderOrder();
  }, [])

  if (orderItems === null || orderItems.length === 0) return (
    <div className="text-center  font-resist-regular">
      <IconShoppingBagX stroke={2} size={120} color='#6c757d' className='m-auto' aria-label='Icon that shows, nothing is in the order'/>
      <p className="text-xl mt-5">No items in the order.</p>
      <Link href='/menu/' title='Go to menu page' className="underline">Click to see the menu</Link>
    </div>
  )

  return (
    <div aria-label="Order content" className="grid grid-cols-4 md:grid-cols-8 gap-10">
      <div className="col-span-4 md:col-span-5">
        <ul>
          {orderItems.map((item, i) => (
            <OrderItem key={i} name={item.name} price={item.price} quantity={item.quantity} image={item.image} types={item.types}></OrderItem>
          ))}
        </ul>
      </div>
      <div className="col-span-4 md:col-span-3 bg-gray-200 rounded-md p-5 h-max">
          <h2 className="font-noto-bold text-xl">Order Summary</h2>
          <p className="font-resist-medium mt-3 text-2xl">${price}</p>
          { /* ? This form could be component :) */ }
          <form action="/api/reservation" className="mt-2">
            <div className="grid grid-cols-4 gap-x-5 gap-y-2">
              <div className="col-span-2">
                <label htmlFor="name" className={labelClass}>
                  Name:
                  <input type="text" id="name" name="name" className={inputClass}/>
                </label>
              </div>
              <div className="col-span-2">
                <label htmlFor="phone" className={labelClass}>
                  Phone:
                  <input type="text" id="phone" name="phone" className={inputClass}/>
                </label>
              </div>
              <div className="col-span-4">
                <label htmlFor="address" className={labelClass}>
                  Adress:
                  <input type="text" id="address" name="address" className={inputClass}/>
                </label>
              </div>
              <div className="col-span-4">
                <p className="font-resist-regular mb-2">How would you like your order?</p>
                <div className="flex gap-3">
                  <label className="flex-1 cursor-pointer">
                    <input
                      type="radio"
                      name="orderType"
                      value="Delivery"
                      className="hidden peer"
                      defaultChecked
                    />
                    <div className="peer-checked:bg-indigo-600 peer-checked:text-white border border-[#00000038] text-center py-2 rounded-md">
                      Delivery
                    </div>
                  </label>

                  <label className="flex-1 cursor-pointer">
                    <input
                      type="radio"
                      name="orderType"
                      value="TakeOut"
                      className="hidden peer"
                    />
                    <div className="peer-checked:bg-indigo-600 peer-checked:text-white border border-[#00000038] text-center py-2 rounded-md">
                      Take Out
                    </div>
                  </label>
                </div>
              </div>
            </div>

            <button type='submit' className="mt-5 bg-indigo-600 cursor-pointer block hover:bg-indigo-700 font-semibold text-white w-full rounded-sm py-2 text-lg">Pay</button>
          </form>
      </div>
    </div>
  );
};