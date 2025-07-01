import Image from "next/image"

export const Hero = () => {
    return (
        <div className='container mx-auto px-5'>
            <hgroup className='text-center mt-10 w-max mx-auto'>
                <h1 className='font-resist-bold uppercase text-7xl sm:text-9xl 2xl:text-[274px] 2xl:mt-20'>Tomoru</h1>
                <h2 className='font-noto-bold text-xl text-right mt-2 sm:text-3xl 2xl:mt-0'>あかる</h2>
            </hgroup>
            <p className='font-resist-regular mt-10 mb-5 text-xl 2xl:text-4xl'>Flavors that <span className='old-italic text-xl'>glow</span>. <br />Moments that <span className='old-italic text-xl'>linger</span>. Tomuru.</p>
            <div className='hidden sm:block mb-5 sm:mb-10'>
                <Image
                    src="/hero.webp"
                    width={1920}
                    height={1280}
                    alt="Hero image"
                    priority
                />
            </div>

            {/* Mobile image */}
            <div className="block sm:hidden">
                <Image
                    src="/hero-mobile.webp"
                    width={1281}
                    height={1281}
                    alt="Hero image mobile"
                    priority
                />
            </div>
        </div>
    )
}