import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

export const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-5 shadow-sm border-b-[1px]'>
      <Image src='/logo.png' alt='logo' width={150} height={50}/>
      <div className='hidden md:flex gap-10'>
        <h2 className='hover:bg-blue-500 cursor-pointer p-2 px-3 rounded-full hover:text-white '>Home</h2>
        <h2 className='hover:bg-blue-500 cursor-pointer p-2 rounded-full hover:text-white '>History</h2>
        <h2 className='hover:bg-blue-500 cursor-pointer p-2 rounded-full hover:text-white '>Contact us</h2>
      </div>
      <div className=''>
        <UserButton />
      </div>
    </div>
  )
}

export default Navbar
