'use client'

import { useState, useEffect } from "react"

// Using Lucide icons since Tabler icons aren't available
import { Moon, Sun } from "lucide-react"

export const Theme = () => {
  const [theme, setTheme] = useState('light');
  const [mounted, setMounted] = useState(false);

  const handleSwitch = (newTheme) => {
    if (!newTheme) return;
    
    // Remove previous theme class
    if (theme) {
      document.documentElement.classList.remove(theme);
    }
    
    // Add new theme class
    document.documentElement.classList.add(newTheme);
    setTheme(newTheme);
    
    // Save to cookie (only in browser environment)
    if (typeof document !== 'undefined') {
      document.cookie = `theme=${newTheme}; path=/; max-age=31536000`; // 1 year expiry
    }
  };

  const getCookieValue = (name) => {
    if (typeof document === 'undefined') return null;
    
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
      const [key, value] = cookie.trim().split('=');
      if (key === name && value) {
        return value;
      }
    }
    return null;
  };

  useEffect(() => {
    // Set mounted to true to avoid hydration mismatch
    setMounted(true);
    
    // Get saved theme from cookie or use system preference
    const savedTheme = getCookieValue('theme');
    let initialTheme = 'light';
    
    if (savedTheme) {
      initialTheme = savedTheme;
    } else if (typeof window !== 'undefined' && window.matchMedia) {
      // Check system preference
      initialTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    
    setTheme(initialTheme);
    document.documentElement.classList.add(initialTheme);
  }, []);

  // Prevent rendering during hydration to avoid mismatch
  if (!mounted) {
    return null;
  }

  return (
    <button
      className={`fixed bottom-5 right-5 p-3 rounded-full cursor-pointer transition-colors duration-200 ${
        theme === 'dark' 
          ? 'bg-white text-black hover:bg-gray-100' 
          : 'bg-black text-white hover:bg-gray-800'
      }`}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
      onClick={() => handleSwitch(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </button>
  );
};