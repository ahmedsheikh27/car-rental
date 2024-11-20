import React from 'react'
import CarCard from '../Home/CarCard'
import Form from './Form'

function BookingModel({ car }: any) {
    return (
        <form method="dialog" className="modal-box w-11/12 max-w-5xl ">
            <div className="modal-action">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </div>
            <div className='border-b-[1px] pb-2'>
                <h2 className='text-[30px] font-light text-gray-400'>
                    Book a car for rent!
                </h2>
                <h3>
                    {car.name}
                </h3>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className="mt-11  mx-auto sm:mx-0 ">
                    <CarCard car={car} />
                </div>


                <div className='mt-8'>
                    <Form car={car} />
                </div>
                {/* <img
                    className='mix-blend-multiply'
                    src={car.carImage?.url}
                    alt=""
                /> */}
            </div>
        </form >
    )
}

export default BookingModel