import { Newsletter } from "./Newsletter"
import { IconArrowUpRight } from "@tabler/icons-react"
import Link from "next/link"

export const Footer = () => {
    const liClass = 'flex items-center';
    const arrowClr = '#212529';
    const arrowSize = 20;
    const spanClass = 'block mt-0.5';

    return (
        <footer className='my-10'>
            <div className='container mx-auto px-5'>
                <article>
                    <h2 className='font-resist-regular mb-7'>Newsletter</h2>
                    <p className='text-lg font-resist-regular'>Get the latest updates and special offers delivered straight to your inbox.</p>
                    <Newsletter></Newsletter>
                    <div className='flex gap-5 mt-10'>
                        <ul className='font-resist-regular text-sm space-y-1'>
                            <li className={liClass}><Link href='/'><span className={spanClass}>Home</span></Link><IconArrowUpRight color={arrowClr} size={arrowSize}></IconArrowUpRight></li>
                            <li className={liClass}><Link href='/'><span className={spanClass}>Order</span></Link><IconArrowUpRight color={arrowClr} size={arrowSize}></IconArrowUpRight></li>
                            <li className={liClass}><Link href='/'><span className={spanClass}>Contact us</span></Link><IconArrowUpRight color={arrowClr} size={arrowSize}></IconArrowUpRight></li>
                        </ul>
                        <ul className='font-resist-regular text-sm space-y-1'>
                            <li className={liClass}><Link href='/'><span className={spanClass}>Terms of use</span></Link><IconArrowUpRight color={arrowClr} size={arrowSize}></IconArrowUpRight></li>
                            <li className={liClass}><Link href='/'><span className={spanClass}>Team</span></Link><IconArrowUpRight color={arrowClr} size={arrowSize}></IconArrowUpRight></li>
                        </ul>
                    </div>
                   <h2 className='font-resist-regular mb-7 mt-10'>Opening Hours</h2>
                        <ul className='font-resist-regular text-sm' role='navigation'>
                            <li>Monday - Friday: 10:00 AM – 10:00 PM</li>
                            <li>Saturday: 11:00 AM – 11:00 PM</li>
                            <li>Sunday: Closed</li>
                        </ul>
                </article>
            </div>
        </footer>
    )
}