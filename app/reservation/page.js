import { ReservationForm } from "@/components/ReservationForm";
import { HeaderSub } from "@/components/HeaderSub";
import Image from "next/image";

export default async function ReservationPage() {
    return (
        <>
            <HeaderSub />
            <main className="min-h-screen mt-20">
                <div className="container relative">
                    <Image src={'/reservation.webp'} width={1920} height={1080} alt='Reservation Background Illustration'></Image>
                    <ReservationForm />
                </div>
            </main>
        </>
    );
}