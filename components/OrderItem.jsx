'use client'

import { useState } from "react"
import Image from "next/image";
import { IconX } from '@tabler/icons-react';
import { useOrder } from '@/contexts/OrderContext';

export const OrderItem = ({ name, price, quantity, image, types }) => {
    const [itemQuantity, setItemQuantity] = useState(quantity);
    const { removeFromOrder } = useOrder();

    const handleQuantity = (e) => {
        if (e.target.value <= 0) {
            setItemQuantity(1);
        } else {
            setItemQuantity(parseInt(e.target.value) || 1);
        }
    }

    return (
        <li className='border-y border-gray-300 flex flex-col lg:flex-row gap-5 py-10 relative'>
            <Image className='hidden xl:block rounded-sm max-h-[225px]' height={225} width={400} src={image} alt={name + ' Image'} />
            <div className="ml-10 flex gap-20">
                <div>
                    <h2 className='font-resist-regular'>{name}</h2>
                    <ul className="flex gap-1 my-1" role="list">
                        {
                            types.map((type, i) => (
                                <li className='capitalize text-slate-gray font-resist-regular' role="listitem" key={i}>{type}{i % 2 == 0 ? ',': ''}</li>
                            ))
                        }
                    </ul>
                    <p className='font-resist-regular'>${price}</p>
                </div>
                <label htmlFor="quantity" className="sr-only">Quantity</label>
                <input type='number' name='quantity' id='quantity' min={1} className="h-max max-w-[50px] border rounded-sm py-2 border-gray-300 text-center" onChange={(e) => handleQuantity(e)} value={itemQuantity} />
            </div>
            <button alt='Click to remove meal from order' onClick={() => removeFromOrder(name)} aria-label="Click to remove meal from order" className="absolute top-0 rounded-sm px-3 py-1 -right-3 font-semibold cursor-pointer">
                <IconX stroke={2} color="#6c757d" size={25} className="hover:stroke-black"/>
            </button>
        </li>
    )
}