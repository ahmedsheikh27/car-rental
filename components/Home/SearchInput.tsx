import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
export const SearchInput = () => {
    return (
        <>
            <div className='text-center text-gray-500 mt-10'>Search here, where you want to go</div>
            
            <div className=" mx-auto px-4">
                <div className="flex justify-center items-center">
                    <div className="flex items-center bg-gray-100 rounded-full px-5 mt-8 gap-2 w-full h-[60px] sm:w-[500px] ">
                        <FaLocationDot className="h-5 w-5 text-black" />
                        <input
                            placeholder="Location"
                            type="text"
                            className="outline-none bg-transparent p-2 border-r-[1px] text-gray-500 w-1/2 "
                        />
                        <input
                            type="date"
                            className="outline-none bg-transparent p-2 text-gray-500 w-1/2"
                        />
                    </div>
                </div>
            </div>

        </>
    )
}

export default SearchInput