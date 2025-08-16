import { HeaderSub } from "@/components/HeaderSub"
import { MenuClient } from "@/ui/MenuClient"
import { OrderProvider } from "@/contexts/OrderContext"

export default async function MenuPage() {
    return (
        <>
            <OrderProvider>
                <HeaderSub />
                <main className="min-h-screen mt-20">
                    <div className='container'>
                        <h1 className="text-4xl lg:text-6xl mb-1 font-bold text-eerie-black text-center">View our menu</h1>
                        <p className="text-center text-lg font-resist-regular mt-5">Explore our delicious dishes below</p>
                        <MenuClient></MenuClient>
                    </div>
                </main>
            </OrderProvider>
        </>
    )
}