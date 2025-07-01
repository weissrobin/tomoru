import Link from "next/link";
import { IconShoppingCart } from '@tabler/icons-react';

export const Navigation = () => {
    const linkClass = 'uppercase text-sm';

    return (
        <nav className='py-2 px-5 md:px-0 font-resist-medium border-eerie-black border-b-2'>
            <ul className='flex gap-2 w-full sm:justify-between container mx-auto' role='navigation'>
                <div className='flex gap-2'>
                    <li>
                        <Link href={'menu'} className={linkClass}>Menu</Link>
                    </li>
                    <li>
                        <Link href={'reservation'} className={linkClass}>Reservation</Link>
                    </li>
                    <li className='hidden sm:block'>
                        <Link href={'cart'} className={linkClass}>Cart</Link>
                    </li>
                </div>
                <div className='flex gap-2 flex-1 sm:flex-0'>
                    <li>
                        <Link href={'photo'} className={linkClass}>About</Link>
                    </li>
                    <li>
                        <Link href={'contact'} className={linkClass}>Contact</Link>
                    </li>
                </div>
                <button className='sm:hidden' aria-roledescription='Enter your order cart'>
                    <IconShoppingCart></IconShoppingCart>
                </button>
            </ul>
        </nav>
    )
}