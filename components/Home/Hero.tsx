import Image from 'next/image'
import React from 'react'

export const Hero = () => {
    return (
        <div className=' p-5 items-start grid grid-cols-1 md:grid-cols-2'>
            <div className=' flex flex-col gap-10 mb-5'>
                <h1 className='font-bold text-[40px] '>
                    Book a car for your tour, <br />
                    Premium car rental in your area.
                </h1>
                <p className='space-x-2 text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi delectus dignissimos, saepe veniam facilis voluptates doloremque? Excepturi nemo fuga eligendi quisquam praesentium velit libero, molestiae repudiandae hic dolor sunt repellat?</p>
                <button className='bg-blue-500 rounded-full text-white p-2  w-[180px]'>Explor more</button>
            </div>

            <div className='lg:ml-[150px]'>
                {/* <Image src='/hero.png' alt='' width={500} height={400} /> */}
            <Image src='/hero-car.jpg' alt='' width={700} height={450}/>
            </div>
        </div>
    )
}

export default Hero