import Link from "next/link";
import { IconCircleArrowRight } from "@tabler/icons-react";

export const MainButton = ({ text, href, addClass }) => {
    return (
        <Link
            href={href}
            className={`group mt-7 flex items-center gap-3 w-max rounded-3xl border-eerie-black dark:border-white text-sm xl:text-base font-resist-medium uppercase border-2 px-[1em] py-[.5em] hover:bg-eerie-black hover:text-white dark:hover:text-black dark:hover:bg-white ${addClass}`}
        >
            <span className='mt-1'>{text}</span>
            <IconCircleArrowRight className='text-eerie-black dark:text-white group-hover:text-white dark:group-hover:text-black' />
        </Link>
    );
};
