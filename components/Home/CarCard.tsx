'use client'
import React, { useEffect, useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { FaGasPump } from 'react-icons/fa6'
import { MdAirlineSeatReclineNormal } from 'react-icons/md'
import { PiSteeringWheel } from 'react-icons/pi'

function CarCard(props: any) {
    const [car, setCar] = useState<any>()
    useEffect(() => {
        if (props.car) {
            setCar(props.car)
        }
    }, [props.car])
    return car && (
        <div className="border rounded-[15px] bg-white p-3 max-w-[400px] w-[90%] h-full max-h-[400px] shadow-md shadow-gray-300 group relative">
            <h1 className='text-[30px] font-bold mb-2' >
                {car.name}
            </h1>
            <img
                src={car.carImage?.url}
                alt={car.name}
                className="object-contain flex mx-auto h-[200px] w-[250px]"
            />
            <h2 className='text-[24px] font-bold mb-2 ' >
                <span className='text-[18px] font-light '>$</span>
                {car.price}
                <span className='text-[12px] font-light '>/day</span>
            </h2>
            <hr className="bg-gray-500 mb-3 h-[0.1px] border-none" />
            <div className='flex justify-between items-center w-full lg:px-5 group-hover:hidden'>

                <div className='text-center text-gray-500'>
                    <PiSteeringWheel className='w-full text-[22px] mb-2' />
                    <h2 className='line-clamp-5 text-[14px] font-light'>{car.carType}</h2>
                </div>
                <div className='text-center text-gray-500 '>
                    <MdAirlineSeatReclineNormal className='w-full text-[22px] mb-2' />
                    <h2 className='line-clamp-5 text-[16px] font-light'>{car.seats}Seats</h2>
                </div>
                <div className='text-center text-gray-500'>
                    <FaGasPump className='w-full text-[22px] mb-2' />
                    <h2 className='line-clamp-5 text-[14px] font-light'>{car.carAvg}MPG</h2>
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