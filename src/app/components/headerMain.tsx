import React from 'react'
import { BiSolidUser } from 'react-icons/bi';
import { BsSearch } from "react-icons/bs";
import { CiHeart } from 'react-icons/ci';
// import { HiOutlineShoppingBag } from 'react-icons/hi2';

const HeaderMain = () => {
  return (
    <div  className='border-b border-gray-200 py-6 bg-gray-400'>
        <div className='container sm:flex justify-between items-center'>
            <div className='font-bold text-4xl text-center pb-4  sm:pb-0 text-white'>
            Shoppy
            </div>

            <div className='w-full sm:w- [300px] md:w-[70%] relative'>
                <input    className='border-gray-200 border py-2 px-4 rounded-lg w-full' type="text" placeholder='Enter any product name....' />

                <BsSearch className="absolute right-0 top-0 mr-3 mt-3 text-gray-400" size={20}/>

            </div>

              <div className='hidden lg:flex gap-4 text-gray-500 text-[30px]'>
              <BiSolidUser />

              <div className='relative'>
              <CiHeart />
              <div className='bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18x] text-[12px] text-white grid place-items-center translate-x1 -translate-y-1'>
                0

              </div>
              </div>

              <div className='relative'>
              {/* <HiOutlineShoppingBag /> */}
              <div className='bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18x] text-[12px] text-white grid place-items-center translate-x1 -translate-y-1'>
                0

              </div>
              </div>


              </div>
        </div> 

    </div>
  )
}

export default HeaderMain
