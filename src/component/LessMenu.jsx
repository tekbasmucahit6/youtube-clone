import React from 'react'
import { MdHomeFilled } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { CiCirclePlus } from "react-icons/ci";
function LessMenu() {
  return (
    <div className='flex bg-[rgb(15,15,15);] justify-between items-center xl:grid lg:grid md:grid gap-8 p-2'>
        
        <div className='grid text-white gap-2'>

            <div className='flex justify-center items-center'>
                <MdHomeFilled className='text-xl' />
            </div>

            <div className='flex justify-center items-center'>
                <em className='text-xs'>Ana sayfa</em>
            </div>

        </div>

        <div className='grid text-white gap-2'>

            <div className='flex justify-center items-center'>
                <SiYoutubeshorts className='text-xl' />
            </div>

            <div className='flex justify-center items-center'>
                <em className='text-xs'>Shorts</em>
            </div>

        </div>


        <div className='grid text-white xl:hidden lg:hidden md:hidden'>

            <div className='flex justify-center items-center'>
                <CiCirclePlus className='text-3xl' />
            </div>


        </div>


        <div className='grid text-white gap-2'>

            <div className='flex justify-center items-center'>
                <MdSubscriptions className='text-xl' />
            </div>

            <div className='flex justify-center items-center'>
                <em className='text-xs'>Abonelikler</em>
            </div>

        </div>
        
        

        <div className='grid text-white gap-2'>

            <div className='flex justify-center items-center'>
                <MdOutlineVideoLibrary className='text-xl' />
            </div>

            <div className='flex justify-center items-center'>
                <em className='text-xs'>Siz</em>
            </div>

        </div>

    </div>
  )
}

export default LessMenu