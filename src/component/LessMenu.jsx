import React from 'react'
import { MdHomeFilled } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { MdOutlineVideoLibrary } from "react-icons/md";
function LessMenu() {
  return (
    <div className='flex bg-[rgb(15,15,15);] justify-between items-center xl:grid lg:grid md:grid gap-10 p-5'>
        
        <div className='grid text-white gap-2'>

            <div className='flex justify-center items-center'>
                <MdHomeFilled className='text-2xl' />
            </div>

            <div className='hidden xl:flex lg:flex md:flex justify-center items-center'>
                <em className='text-xs'>Ana sayfa</em>
            </div>

        </div>

        <div className='grid text-white gap-2'>

            <div className='flex justify-center items-center'>
                <SiYoutubeshorts className='text-2xl' />
            </div>

            <div className='hidden xl:flex lg:flex md:flex justify-center items-center'>
                <em className='text-xs'>Shorts</em>
            </div>

        </div>

        <div className='grid text-white gap-2'>

            <div className='flex justify-center items-center'>
                <MdSubscriptions className='text-2xl' />
            </div>

            <div className='hidden xl:flex lg:flex md:flex justify-center items-center'>
                <em className='text-xs'>Abonelikler</em>
            </div>

        </div>

        <div className='grid text-white gap-2'>

            <div className='flex justify-center items-center'>
                <MdOutlineVideoLibrary className='text-2xl' />
            </div>

            <div className='hidden xl:flex lg:flex md:flex justify-center items-center'>
                <em className='text-xs'>Siz</em>
            </div>

        </div>

    </div>
  )
}

export default LessMenu