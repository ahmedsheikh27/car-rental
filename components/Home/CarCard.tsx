'use client'
import React, { useEffect, useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { FaGasPump } from 'react-icons/fa6'
import { MdAirlineSeatReclineNormal } from 'react-icons/md'
import { PiSteeringWheel } from 'react-icons/pi'

function CarCard(props: any) {
    const [cars, setCars] = useState<any>()
    useEffect(() => {
        if (props.car) {
            setCars(props.car)
        }
    }, [props.car])
    return cars && (
        <div className="border rounded-[15px] bg-gray-50 p-3 w-full max-w-[300px] max-h-[400px] h-full 
                        shadow-md shadow-gray-300 transition-transform duration-0 transform 
                        hover:scale-[1.1] hover:bg-white group relative ">
            <h2 className='text-[28px] font-bold mb-2' >
                {cars.name}
            </h2>
            <img
                src={cars.carImage?.url}
                alt={cars.name}
                className="object-contain mix-blend-multiply aspect-[4/3] flex mx-auto w-100%"
            />
            <h2 className='text-[24px] font-bold mb-2 ' >
                <span className='text-[18px] font-light '>$</span>
                {cars.price}
                <span className='text-[12px] font-light '>/day</span>
            </h2>
            <hr className="bg-gray-500 mb-3 h-[0.1px] border-none" />
            <div className='flex justify-between items-center w-full lg:px-5 group-hover:hidden'>

                <div className='text-center text-gray-500'>
                    <PiSteeringWheel className='w-full text-[22px] mb-2' />
                    <h2 className='line-clamp-5 text-[14px] font-light'>{cars.carType}</h2>
                </div>
                <div className='text-center text-gray-500 '>
                    <MdAirlineSeatReclineNormal className='w-full text-[22px] mb-2' />
                    <h2 className='line-clamp-5 text-[16px] font-light'>{cars.seats}Seats</h2>
                </div>
                <div className='text-center text-gray-500'>
                    <FaGasPump className='w-full text-[22px] mb-2' />
                    <h2 className='line-clamp-5 text-[14px] font-light'>{cars.carAvg}MPG</h2>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <button className="flex justify-between items-center bg-blue-500 text-white w-[240px] font-semibold text-center py-2 px-4 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-0">
                    Rent Now <FaArrowRight />
                </button>
            </div>
        </div>
    )
}

export default CarCard