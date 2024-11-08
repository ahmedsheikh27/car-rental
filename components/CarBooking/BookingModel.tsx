import React from 'react'

function BookingModel({ car }: any) {
    return (
        <div className="modal-box w-11/12 max-w-5xl">
            <div className='border-b-[1px] pb-2'>
            <h2 className='text-[30px] font-light text-gray-400'>
                Book a car for rent!
            </h2>
            <h3>
                {car.name}
            </h3>
            </div>

        </div>
    )
}

export default BookingModel