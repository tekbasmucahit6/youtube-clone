import React from 'react'
import { FaYoutube } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { BiMicrophone } from "react-icons/bi";
import { BsArrowBarUp } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
function Header() {
  return (
    <div className='flex bg-[rgb(15,15,15);] justify-between items-center px-5 py-2'>
        <div className='flex justify-center items-center gap-10'>

            <div className='hidden xl:flex lg:flex md:flex justify-center items-center ml-4'>
                <IoMdMenu className='text-white text-3xl ' />
            </div>

            <div className='flex justify-center items-center'>
                <FaYoutube className='text-red-600 text-4xl' />
                <strong className='text-white text-2xl'>YouTube</strong>
            </div>

        </div>

        <div className='hidden xl:flex lg:flex md:flex justify-center items-center'>
            <input type="text" className='w-96 rounded-tl-full rounded-bl-full border py-2 px-5 border-[rgb(34,34,34)] bg-[rgb(15,15,15);] text-white' placeholder='Ara' />
            <button className='bg-[rgb(34,34,34)] py-3 rounded-tr-full rounded-br-full px-4'><CiSearch className='text-slate-100' /></button>
            <button className='rounded-full p-2 bg-[rgb(34,34,34)] ml-5'><BiMicrophone className='text-slate-100 text-2xl' /></button>
        </div>
        
        
        <div className='flex justify-center items-center gap-6'>
            <button className='text-white text-2xl xl:hidden lg:hidden md:hidden'><CiSearch className='text-slate-100' /></button>
            <button className='text-white text-2xl hidden xl:flex lg:flex md:flex'><BsArrowBarUp /></button>
            <button className='text-white text-2xl'><IoMdNotificationsOutline /></button>
            <button className='text-white text-2xl'><MdOutlineAccountCircle /></button>
        </div>


    </div>
  )
}

export default Header