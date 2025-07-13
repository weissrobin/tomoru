import { IconArrowRight } from "@tabler/icons-react"

export const Newsletter = () => {
    return (
        <form action="/api/newsletter">
            <div className="flex w-full border-b border-eerie-black dark:border-white mt-10 items-center">
                <label htmlFor="newsletter" className='sr-only'>Newsletter</label>
                <input
                    type="text"
                    id='newsletter'
                    className="flex-1 font-resist-regular focus-visible:outline-none p-1 py-3"
                    placeholder="Email adress"
                />
                <IconArrowRight className='text-eerie-black dark:text-white'></IconArrowRight>
            </div>
        </form>
    );
};
