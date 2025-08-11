export const ReservationForm = () => {
    const inputClass = 'mt-0.5 w-full border-b border-gray-700 pb-1 text-base focus:outline-none';
    const labelClass = 'text-eerie-black';
    return (
            <form action="/api/reservation" className='p-10 bg-seasalt max-w-[500px] w-full font-resist-regular absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid'>
                <h1 className="text-3xl mb-1 font-bold text-eerie-black text-center">Reservation</h1>
                <p className='text-center pb-5 text-eerie-black'>Fill up the form below to make a reservation</p>
                <div className="grid grid-cols-8 gap-5">
                    <div className="col-span-8">
                        <label htmlFor="name" className={labelClass}>
                            Name:
                            <input type="text" id="name" name="name" className={inputClass} placeholder="Enter your name" />
                        </label>
                    </div>
                    <div className="col-span-8">
                        <label htmlFor="email" className={labelClass}>
                            Email:
                            <input type="email" id="email" name="email" className={inputClass} placeholder="Enter your email" />
                        </label>
                    </div>
                    <div className="col-span-8 lg:col-span-4">
                        <label htmlFor="date" className={labelClass}>
                            Date:
                            <input type="date" id="date" name="date" className={inputClass} placeholder="Select a date" />
                        </label>
                    </div>
                    <div className="col-span-8 lg:col-span-4">
                        <label htmlFor="time" className={labelClass}>
                            Time:
                            <input type="time" id="time" name="time" className={inputClass} placeholder="Select a time" />
                        </label>
                    </div>
                    <div className="col-span-8">
                        <label htmlFor="guests" className={labelClass}>
                            Number of Guests:
                            <input type="number" id="guests" name="guests" min="1" className={inputClass} placeholder="Enter number of guests" />
                        </label>
                    </div>
                </div>
                <button type="submit" className='mt-4 text-lg bg-eerie-black px-4 py-2 border border-eerie-black text-white hover:cursor-pointer hover:bg-seasalt hover:text-eerie-black transition-all'>Reserve</button>
            </form>
    )
}