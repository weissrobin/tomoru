'use client'

import { MenuLink } from "./MenuLink"
import { MenuLine } from "./MenuLine"
import Image from "next/image"
import { useEffect, useState, useRef } from "react"
import { usePathname } from "next/navigation"

// ? I could make only navigation and the line client component.
export const Header = () => {
    const pathname = usePathname();
    const activeLinkRef = useRef(null);
    const positionMemo = useRef({left: 0, width: 0});
    const [linePos, setLinePos] = useState({ left: 0, width: 0 });

    useEffect(() => {
        const activeLink = activeLinkRef.current.querySelector('.active-link');

        if (activeLink) {
            const newLeft = activeLink.offsetLeft;
            const newWidth = activeLink.offsetWidth;

            if (
                positionMemo.current.left !== newLeft ||
                positionMemo.current.width !== newWidth
            ) {
                positionMemo.current = { left: newLeft, width: newWidth };
                setLinePos({ left: newLeft, width: newWidth });
            }
        }
    }, [pathname]);

    return (
        <header className="grid pt-7 pl-10 border-b bg-[#0a0a0a] border-[#ffffff24] relative">
            <div className="flex items-center gap-5">
                <Image src={'/rw-logo-margin.svg'} height={50} width={50} alt='System Logo'></Image>
                <div>
                    / Welcome to admin dashboard, <span className="text-[#52a8ff]">admin</span>
                </div>
            </div>
            <nav className="mt-5 pb-2  relative">
                <ul role="navigation" className="flex gap-1 text-sm relative" ref={activeLinkRef}>
                    <MenuLink name='Dashboard' href='/admin'></MenuLink>
                    <MenuLink name='Reservations' href='/admin/reservations'></MenuLink>
                    <MenuLink name='Orders' href='/admin/orders'></MenuLink>
                </ul>
                    <MenuLine left={linePos.left} width={linePos.width}></MenuLine>
            </nav>
        </header>
    )
}