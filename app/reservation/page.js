import { ReservationForm } from "@/components/ReservationForm";
import { HeaderSub } from "@/components/HeaderSub";
import Image from "next/image";

export default async function ReservationPage() {
    return (
        <>
            <HeaderSub />
            <main className="flex flex-col items-center justify-center min-h-screen">
                <div className="container relative">
                    <Image src={'/reservation.webp'} width={1920} height={1080} alt='Reservation Background Illustration'></Image>
                    <div>
                        <h1 className="text-2xl font-bold mb-4">Reservation Page</h1>
                        <ReservationForm />
                    </div>
                </div>
            </main>
        </>
    );
}