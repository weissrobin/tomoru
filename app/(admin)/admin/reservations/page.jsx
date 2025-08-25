import { Reservations } from "@/data/Reservation";
import { IconPencil } from "@tabler/icons-react";

export default async function AdminReservations() {
    function StatusBadge({ status }) {
        const statusStyles = {
            Upcoming: "bg-blue-500/10 text-blue-400",
            Ongoing: "bg-green-500/10 text-green-400",
            Canceled: "bg-red-500/10 text-red-400",
        };

        return (
            <span
                className={`text-sm px-3 py-1 rounded-full font-medium ${statusStyles[status] || "bg-gray-500/10 text-gray-400"}`}
            >
                {status}
            </span>
        );
    }

    return (
        <main className="pt-10">
            <div className="border-b border-[#ffffff24]">
                <div className='container'>
                    <h1 className='text-3xl font-medium'>Reservations</h1>
                    <p className="mb-10 mt-3">Here you can see the upcoming, canceled and ongoing reservations</p>
                </div>
            </div>
            <div className="container py-10 flex flex-col gap-3">
                {Reservations.map((res) => (
                    <div
                        key={res.id}
                        className="bg-[#0a0a0a] border border-[#ffffff24] rounded-lg p-5 shadow-lg flex items-center justify-between hover:border-white cursor-pointer transition-all"
                    >
                        <div>
                            <h2 className="text-base font-semibold text-white">{res.name}</h2>
                            <p className="text-gray-400 text-sm">
                                {res.date} at {res.time} - {res.guests} guests
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <IconPencil stroke={2} color="#a0a0a0" className="cursor-pointer hover:stroke-white"/>
                            <StatusBadge status={res.status} />
                        </div>
                    </div>
                ))}
            </div>
        </main>
    )
}