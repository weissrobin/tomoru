'use client'

import { Filters } from "@/components/Filters"
import { MenuList } from "./MenuList"
import { useState, useEffect } from "react";
import LoadingMenuSkeleton from "./loading/LoadingMenuSkeleton";

export const MenuClient = () => {
  const [category, setCategory] = useState('all');
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMenu = async () => {
    setLoading(true);
    const response = await fetch('/api/menu', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ category })
    });
    const data = await response.json();
    setMenu(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchMenu();
  }, [category]);

  return (
    <>
      <section aria-label="Meal Filter" className="my-10">
        <p className="text-lg font-resist-regular mb-2">You can filter the menu by:</p>
        <Filters setCategory={setCategory} disabled={loading}/>
      </section>

      <section aria-label="Meal Menu" className='grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-8'>
        {loading ? (
            <LoadingMenuSkeleton />
        ) : (
          <MenuList menu={menu} />
        )}
      </section>
    </>
  )
}
