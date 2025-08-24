'use client'

import { useState, useEffect } from "react"
import Link from "next/link";
import { IconShoppingBag } from '@tabler/icons-react';

export const FloatingNavigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const linkClass = 'uppercase text-sm lg:text-base';

    useEffect(() => {
        const handleScroll = () => {
            if (document.documentElement.scrollTop > 40) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        }

        document.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [isScrolled]);

    return (
        <nav className={`${isScrolled ? '' : '-translate-y-full'} justify-between transition-transform duration-300 py-2 lg:py-5 px-5 font-resist-medium z-10 border-eerie-black border-b-2 fixed w-full bg-seasalt dark:bg-black dark:border-seasalt`}>
            <ul className='flex gap-2 w-full sm:justify-between container mx-auto' role='navigation'>
                <div className='flex gap-2 lg:gap-5'>
                    <li>
                        <Link href={'menu'} className={linkClass}>Menu</Link>
                    </li>
                    <li>
                        <Link href={'reservation'} className={linkClass}>Reservation</Link>
                    </li>
                    <li className='hidden sm:block'>
                        <Link href={'order'} className={linkClass}>Order</Link>
                    </li>
                </div>
                <div className='flex gap-2 lg:gap-5 flex-1 sm:flex-0'>
                    <li>
                        <Link href={'photo'} className={linkClass}>About</Link>
                    </li>
                    <li>
                        <Link href={'contact'} className={linkClass}>Contact</Link>
                    </li>
                </div>
                <Link href='/order/' className="sm:hidden">
                    <IconShoppingBag></IconShoppingBag>
                </Link>
            </ul>
        </nav>
    )
}