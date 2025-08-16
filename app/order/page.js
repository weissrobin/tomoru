import { HeaderSub } from "@/components/HeaderSub"
import { Order } from "@/components/Order"
import { OrderProvider } from "@/contexts/OrderContext"

export default async function OrderPage() {
    return (
        <>
            <HeaderSub></HeaderSub>
            <main className="min-h-screen mt-20">
                <div className="container">
                    <h1 className="text-4xl lg:text-6xl font-bold text-eerie-black">Order</h1>
                    <p className='text-lg font-resist-regular pb-10 mt-3'>Here you can see your order list</p>
                    <OrderProvider>
                        <Order></Order>
                    </OrderProvider>
                </div>
            </main>
        </>
    )
}