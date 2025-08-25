import { MainButton } from "@/components/MainButton";
import { MainButtonBlack } from "@/components/MainButtonBlack";
import { Map } from "@/components/Map";
import { Header } from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
      <>
        <Header></Header>
        <main className='grid'>
          <section className='py-5 md:py-10 grid dark:border-seasalt 2xl:border-b-2'>
            <div className='grid md:grid-cols-8 md:gap-10 2xl:gap-30 container'>
              <div className='md:col-span-4'>
                <p className="font-resist-regular text-xl md:text-3xl 2xl:text-4xl">
                  Experience <span className="old-italic">refined</span> Japanese <span className="old-italic">flavors</span> in a space where <span className="old-italic">stillness</span> meets <span className="old-italic">warmth</span>, filled with <span className="old-italic">light</span>, <span className="old-italic">care</span>, and <span className="old-italic">lasting moments</span> that stay with you.
                </p>
                <MainButton text='Abous us' href='/about'></MainButton>
                <Image src={'/about.webp'} width={1800} height={1800} alt='Restaurant doors' className='mt-18 2xl:mt-45'></Image>
              </div>
              <div className='md:col-span-4'>
                <p className='font-resist-regular text-lg mt-5 md:mt-0 2xl:text-2xl'>Located in Ginza, Tomoru offers exquisite Japanese dining in a vibrant district known for upscale shops and rich cultural heritage.</p>
                <Image src={'/ginza.webp'} width={1500} height={1500} alt='Ginza in Tokyo' className='mt-18 2xl:mt-25'></Image>
              </div>
            </div>
          </section>
          <section className='py-5 md:py-10 border-b-2 border-eerie-black dark:border-seasalt'>
            <div className='container'>
              <p className='font-resist-regular text-lg md:text-2xl md:text-center'>Discover the <span className="old-italic smaller">essence</span> of Japanese cuisine — delicate, seasonal, and <span className="old-italic smaller">artfully</span> presented.</p>
              <div className='grid md:grid-cols-8 md:gap-10'>
                <article className='mt-5 md:mt-20 md:col-span-8 grid md:grid-cols-8 md:gap-10'>
                  <Image src={'/food.webp'} width={1920} height={1080} alt='Sushi Setto Preview' className='mt-18 md:mt-0 md:col-span-4'></Image>
                  <div className='md:col-span-2'>
                    <h2 className='old-italic text-xl mt-5 md:mt-0'>Sushi Setto</h2>
                    <p className='font-resist-regular 2xl:text-2xl'>$7.99</p>
                  </div>
                  <p className='font-resist-regular text-base mt-4 md:col-span-5 md:text-lg 2xl:text-2xl'><span className="old-italic text-lg smaller">Sushi Setto</span> A curated selection of premium nigiri and rolls, paired with traditional garnishes and green tea — a true taste of Japan in every bite.</p>
                </article>
                <article className='mt-5 md:mt-0 md:col-span-8 grid md:grid-cols-8 md:gap-10 2xl:mt-30'>
                  <Image src={'/matcha.webp'} width={1920} height={1080} alt='Matcha tea Preview' className='mt-18 md:mt-0 md:col-span-4 md:col-start-4'></Image>
                  <div className='md:row-start-1 md:col-span-2'>
                    <h2 className='old-italic text-xl mt-5 md:mt-0'>Matcha Tea</h2>
                    <p className='font-resist-regular'>$1.99</p>
                  </div>
                  <p className='font-resist-regular text-base mt-4 md:col-span-5 md:col-start-3 md:text-lg 2xl:text-2xl'><span className="old-italic text-lg smaller">Matcha Tea</span> A smooth, earthy infusion of finely ground green tea leaves — calming, rich in antioxidants, and deeply rooted in Japanese tradition.</p>
                  <MainButton text='View more' href='/menu' addClass='md:col-span-8 md:col-start-3'></MainButton>
                </article>
              </div>
            </div>
          </section>
          <section>
            <div className='container mx-auto'>
              <div className='relative'>
              <Image src={'/location.webp'} height={1080} width={1920} alt='Location illustration' className='sm:mt-10 lg:hidden'></Image>
              <Image src={'/location-desktop.webp'} height={1080} width={1920} alt='Location illustration - Desktop' className='sm:mt-10 2xl:mt-30 hidden lg:block'></Image>
                <div className='w-[90%] xl:w-[70%] bg-white absolute left-1/2 xl:left-20 xl:bottom-20 xl:translate-0 -translate-x-1/2 bottom-5 flex'>
                  <article className='flex flex-col basis-[450px] xl:basis-[1000px] p-5 py-7 font-resist-regular xl:text-2xl'>
                    <h2 className='mb-auto xl:mb-10 font-resist-regular text-sm xl:text-xl dark:text-eerie-black'>How to get there?</h2>
                    <p className='dark:text-eerie-black'>Tomuru Restaurant</p>
                    <p className='dark:text-eerie-black'>5-8-10 Ginza, Chuo-ku, Tokyo 104-0061</p>
                    <p className='dark:text-eerie-black'>Japan</p>
                    <MainButtonBlack text='View more' href='/location' addClass='hidden xl:flex'></MainButtonBlack>
                  </article>
                  <Map></Map>
                </div>
              </div>
            </div>
          </section>
        </main>
      </>
  );
}
