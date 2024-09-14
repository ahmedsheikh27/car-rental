import React from 'react'

export const CarsFilter = () => {
    return (
        <div className='mt-10 flex items-center justify-between'>
            <div>
                <h2 className='text-[35px] font-bold'> Filter cars</h2>
                <h2 className='text-[15px]'> Explore our cars you might like</h2>
            </div>
            <div className='flex gap-10'>
                <select className="select select-bordered w-full max-w-xs">
                    <option disabled selected>Prices</option>
                    <option>Max to Min</option>
                    <option>Min to Max</option>
                </select>
                <select className="select select-bordered w-full max-w-xs md:block hidden">
                    <option disabled selected>Cars</option>
                    <option>BMW</option>
                    <option>Toyota</option>
                    <option>Nissan</option>
                    <option>Honda</option>
                </select>
            </div>
        </div>
    )
}

export default CarsFilter