import { Card } from "@/components/admin/Card"
import { OrdersData } from "@/data/Menu"
import { ReservationsData } from "@/data/Menu"

export default async function AdminHome() {
    return (
        <main className="pt-10">
            <div className="border-b border-[#ffffff24]">
                <div className='container'>
                    <h1 className='text-3xl font-medium'>Dashboard</h1>
                    <p className="mb-10 mt-3">This is the main page of admin panel. See the overview</p>
                </div>
            </div>
            <div className="container my-10">
                <div className="grid grid-cols-3 gap-5">
                    <Card data={OrdersData} dataKey={'orders'} xAxisKey={'date'} showData={'orders'} color='#ff0055' mainHeading='Orders Timeline' mainLabel='Hover over the graph to see details.'></Card>
                    <Card data={ReservationsData} dataKey={'reservations'} color='#00ff55' showData={'reservations'} mainHeading='Reservations Timeline' mainLabel='Hover over the graph to see details.'></Card>
                </div>
            </div>
        </main>
    )
}