import '@/app/globals.css';
import '@/app/admin.css';

import { Geist } from 'next/font/google';

const geist = Geist({
    subsets: ['latin'],
    display: 'swap'
})

export default async function LoginLayout({ children }) {
    return (
        <html>
            <body className={`bg-black min-h-[100vh] flex items-center justify-center ${inter.className}`}>
                {children}
                <div className='absolute bottom-5 left-5'>
                    <p>© System by Robin Weiss</p>
                </div>
            </body>
        </html>
    )
}