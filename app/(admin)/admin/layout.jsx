import '@/app/globals.css';
import '@/app/admin.css';

import { Geist } from 'next/font/google';

const geist = Geist({
    subsets: ['latin'],
    display: 'swap'
})

import { Header } from '@/components/admin/Header';

export default async function AdminLayout({ children }) {
    return (
        <html>
            <body className={`bg-black ${geist.className} min-h-[100vh]`}>
                <Header></Header>
                {children}
                <div className='fixed bottom-2 left-2 lg:bottom-5 lg:left-5'>
                    <p>© System by Robin Weiss</p>
                </div>
            </body>
        </html>
    )
}