'use client'

import { useState } from "react"
import Image from "next/image";
import { toast, ToastContainer, Zoom } from "react-toastify";
import { useRouter } from "next/navigation";

export const LoginForm = () => {
    const [formData, setFormData] = useState({});
    const labelClass = 'block pb-1';
    const inputclass = 'bg-white px-2 py-1 text-black';
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        })

        const data = await res.json();

        switch(data.status) {
            case 401:
                toast.error(data.message, {
                    autoClose: 4000,
                    hideProgressBar: true,
                    position: 'top-center',
                    className: 'my-cs-toast'
                });
                break;
            case 200:
                toast.success(data.message, {
                    autoClose: 4000,
                    hideProgressBar: true,
                    position: 'top-center',
                    className: 'my-cs-toast',
                    onClose: () => router.push('/admin')
                });
                break;
            default:
                toast.error(data.message, {
                    autoClose: 4000,
                    hideProgressBar: true,
                    position: 'top-center',
                    className: 'my-cs-toast'
                });
                break;
        }
    }

    const handleInput = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    return (
        <>
            <ToastContainer transition={Zoom}/>
            <div className='grid grid-cols-[1fr_1px_1fr] grid-template w-full justify-center items-center'>
                <div>
                    <Image src={'rw-logo-margin.svg'} width={400} height={400} alt='RW - logo' className="px-15 py-10"></Image>
                </div>
                <div className="h-full border m-auto"></div>
                <form action="/api/auth/login" method='POST' onSubmit={handleSubmit} className='space-y-3 m-auto'>
                    <div>
                        <label htmlFor="username" className={labelClass}>
                            Username:
                        </label>
                        <input type="text" name="username" id="username" className={inputclass} onChange={(e) => handleInput(e)} />
                    </div>
                    <div>
                        <label htmlFor="password" className={labelClass}>
                            Password:
                        </label>
                        <input type="password" name="password" id="password" className={inputclass} onChange={(e) => handleInput(e)} />
                    </div>
                    <input type="submit" value='Login' className='bg-black hover:bg-white hover:text-black transition-all text-white w-full font-bold mt-5 px-2 py-1.5 border border-white antialiased hover:white cursor-pointer' />
                </form>
            </div>
        </>
    )
}