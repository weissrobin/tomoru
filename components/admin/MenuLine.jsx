'use client'

import { useEffect, useRef } from "react";

export const MenuLine = ({ left, width }) => {
    return (
        <div className={`h-0.5 bg-white absolute bottom-0 transition-all duration-300`} style={{
            transform: `translateX(${left + width / 2}px) translateX(-50%)`,
            left: 0,
            width: width,
            willChange: 'transform'
        }}></div>
    )
}