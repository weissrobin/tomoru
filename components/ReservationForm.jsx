export const ReservationForm = () => {
    return (
            <form action="/api/reservation" className='bg-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid'>
                <label htmlFor="name">
                    <input type="text" id="name" name="name" />
                </label>
                <label htmlFor="email">
                    <input type="email" id="email" name="email" />
                </label>
                <label htmlFor="date">
                    <input type="date" id="date" name="date" />
                </label>
                <label htmlFor="time">
                    <input type="time" id="time" name="time" />
                </label>
                <label htmlFor="guests">
                    <input type="number" id="guests" name="guests" min="1" />
                </label>
                <button type="submit">Reserve</button>
            </form>
    )
}