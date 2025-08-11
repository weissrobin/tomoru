import { HeaderSub } from "@/components/HeaderSub"
import { MenuClient } from "@/ui/MenuClient"
import { CartProvider } from "@/contexts/CartContext"

export default async function MenuPage() {

    return (
        <>
            <CartProvider>
                <HeaderSub />
                <main className="min-h-screen mt-20">
                    <div className='container'>
                        <h1 className="text-6xl mb-1 font-bold text-eerie-black text-center">View our menu</h1>
                        <p className="text-center text-lg font-resist-regular mt-5">Explore our delicious dishes below</p>
                        <MenuClient></MenuClient>
                    </div>
                </main>
            </CartProvider>
        </>
    )
}