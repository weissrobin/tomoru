'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

export const MenuLink = ({ name, href }) => {
    const pathname = usePathname();

    return (
        <li className='px-2 hover:bg-admin-link rounded-sm py-1'>
            <Link className={`${pathname === href ? 'text-white active-link' : 'text-[#cccccc]'}`} href={href}>{name}</Link>
        </li>
    )
}