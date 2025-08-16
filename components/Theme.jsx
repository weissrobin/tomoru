'use client'

import { useState, useEffect } from "react"
import { IconMoon, IconSun } from "@tabler/icons-react";

export const Theme = () => {
    const [theme, setTheme] = useState(null);

    const handleSwitch = (newTheme) => {
        document.cookie = `theme=${newTheme}`;
        document.documentElement.classList.remove(theme);
        document.documentElement.classList.add(newTheme);
        setTheme(newTheme);
    };

    useEffect(() => {
        const cookiesObject = {};
        document.cookie
            .split(';')
            .map((item) => item.trim())
            .forEach((cookie) => {
                const [key, value] = cookie.split('=');
                cookiesObject[key] = value;
            });

        const savedTheme = cookiesObject.theme || 'light';
        setTheme(savedTheme);
        document.documentElement.classList.add(savedTheme);
    }, []);

    if (!theme) return null;

    return (
        <button
            className={`fixed bottom-5 right-5 p-1 rounded-full cursor-pointer ${
                theme === 'dark' ? 'bg-seasalt' : 'bg-black'
            }`}
            aria-label="This button switches the website theme (Light or Dark)"
        >
            {theme === 'dark' ? (
                <IconSun
                    className="block"
                    color="#000000"
                    onClick={() => handleSwitch('light')}
                />
            ) : (
                <IconMoon
                    className="block"
                    color="#f8f9fa"
                    onClick={() => handleSwitch('dark')}
                />
            )}
        </button>
    );
};
