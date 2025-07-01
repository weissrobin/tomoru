import Link from "next/link";
import { IconCircleArrowRight } from "@tabler/icons-react";

export const MainButton = ({ text, href }) => {
    return (
        <Link href={href} className='mt-7 flex items-center gap-3 w-max rounded-3xl border-eerie-black text-sm font-resist-medium uppercase border-2 px-[1em] py-[.5em]'>
            <span className='mt-1'>{text}</span>
            <IconCircleArrowRight color='#212529'></IconCircleArrowRight>
        </Link>
    );
}