import { MainButton } from "@/components/MainButton";
import { Map } from "@/components/Map";
import Image from "next/image";

export default function Home() {
  return (
      <main className='grid'>
        <section className='py-5 md:py-10 grid dark:border-seasalt 2xl:border-b-2'>
          <div className='grid md:grid-cols-8 md:gap-10 2xl:gap-30 container'>
            <div className='md:col-span-4'>
              <p className="font-resist-regular text-xl md:text-3xl 2xl:text-4xl">
                Experience <span className="old-italic">refined</span> Japanese <span className="old-italic">flavors</span> in a space where <span className="old-italic">stillness</span> meets <span className="old-italic">warmth</span>, filled with <span className="old-italic">light</span>, <span className="old-italic">care</span>, and <span className="old-italic">lasting moments</span> that stay with you.
              </p>
              <MainButton text='Read more' href='/about'></MainButton>
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
            <p className='font-resist-regular text-lg md:text-2xl md:text-center'>Discover the <span className="old-italic">essence</span> of Japanese cuisine — delicate, seasonal, and <span className="old-italic">artfully</span> presented.</p>
            <div className='grid md:grid-cols-8 md:gap-10'>
              <article className='mt-5 md:mt-20 md:col-span-8 grid md:grid-cols-3 md:gap-10'>
                <Image src={'/food.webp'} width={1920} height={1080} alt='Food example' className='mt-18 md:mt-0 md:col-span-2'></Image>
                <div>
                  <h2 className='old-italic text-xl mt-5 md:mt-0'>Sushi Setto</h2>
                  <p className='font-resist-regular'>$7.99</p>
                </div>
                <p className='font-resist-regular text-base mt-4 md:col-span-3 md:text-lg'><span className="old-italic text-lg">Sushi Setto</span> A curated selection of premium nigiri and rolls, paired with traditional garnishes and green tea — a true taste of Japan in every bite.</p>
              </article>
              <article className='mt-5 md:mt-0 md:col-span-8 grid md:grid-cols-3 md:gap-10'>
                <Image src={'/matcha.webp'} width={1920} height={1080} alt='Food example' className='mt-18 md:mt-0 md:col-span-2 md:col-start-2'></Image>
                <div className='md:row-start-1'>
                  <h2 className='old-italic text-xl mt-5 md:mt-0'>Matcha Tea</h2>
                  <p className='font-resist-regular'>$1.99</p>
                </div>
                <p className='font-resist-regular text-base mt-4 md:col-span-3 md:text-lg'><span className="old-italic text-lg">Matcha Tea</span> A smooth, earthy infusion of finely ground green tea leaves — calming, rich in antioxidants, and deeply rooted in Japanese tradition.</p>
              </article>
            </div>
            <MainButton text='View more' href='/menu'></MainButton>
          </div>
        </section>
        <section>
          <div className='container mx-auto'>
            <div className='relative'>
            <Image src={'/location.webp'} height={1080} width={1920} alt='Location illustration' className='sm:mt-10'></Image>
              <div className='w-[90%] bg-white absolute left-1/2 -translate-x-1/2 bottom-5 flex'>
                <article className='flex flex-col basis-[450px] p-5 py-7 font-resist-regular'>
                  <h2 className='mb-auto font-resist-regular text-sm'>How to get there?</h2>
                  <p>Tomuru Restaurant</p>
                  <p>5-8-10 Ginza, Chuo-ku, Tokyo 104-0061</p>
                  <p>Japan</p>
                </article>
                <Map></Map>
            </div>
            </div>
          </div>
        </section>
      </main>
  );
}
