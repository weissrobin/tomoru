import Link from "next/link";
import { IconCircleArrowRight } from "@tabler/icons-react";

export const MainButtonBlack = ({ text, href, addClass }) => {
    return (
        <Link
            href={href}
            className={`group mt-7 flex items-center gap-3 w-max rounded-3xl border-eerie-black text-sm xl:text-base font-resist-medium uppercase border-2 px-[1em] py-[.5em] hover:bg-eerie-black hover:text-white dark:hover:text-black ${addClass}`}
        >
            <span className='mt-1 text-eerie-black group-hover:text-seasalt'>{text}</span>
            <IconCircleArrowRight className='text-eerie-black group-hover:text-white' />
        </Link>
    );
};
