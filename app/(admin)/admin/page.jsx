import { Card } from "@/components/admin/Card"
import { OrdersData } from "@/data/Orders"
import { ReservationsByDate } from "@/data/Reservation"
import { TopDishes } from "@/data/TopDishes"
import SummaryDashboard from "@/components/admin/SummaryDashboard"

export default async function AdminHome() {
    return (
        <main className="pt-10">
            <div className="border-b border-[#ffffff24]">
                <div className='container'>
                    <h1 className='text-3xl font-medium'>Dashboard</h1>
                    <p className="mb-10 mt-3">This is the main page of admin panel. See the overview</p>
                </div>
            </div>
            <div className="container py-10">
                <div className="flex flex-col gap-5 lg:grid grid-cols-6">
                    <div className="col-span-2">
                    <Card
                        data={OrdersData}
                        dataKey="orders"
                        xAxisKey="date"
                        showData="orders"
                        color="#ff0055"
                        mainHeading="Orders Timeline"
                        mainLabel="Hover over the graph to see details."
                        anotherLabel="revenue"
                        type="line"
                    />
                    </div>

                    <div className="col-span-2">
                    <Card
                        data={ReservationsByDate}
                        dataKey="reservations"
                        color="#00ff55"
                        showData="reservations"
                        mainHeading="Reservations Timeline"
                        mainLabel="Hover over the graph to see details."
                        anotherLabel="guests"
                        type="line"
                    />
                    </div>

                    <div className="col-span-4 row-start-2">
                    <Card
                        data={TopDishes}
                        type="pie"
                        dataKey="value"
                        showData="value"
                    />
                    </div>

                    <div className="col-span-2 col-start-5 row-span-2">
                    <SummaryDashboard />
                    </div>
                </div>
            </div>
        </main>
    )
}