import React from 'react'
import { MdHomeFilled } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { CiCirclePlus } from "react-icons/ci";
function LessMenu() {
  return (
    <div className='flex xl:absolute lg:absolute md:absolute bg-[rgb(15,15,15);] justify-between items-center xl:items-start lg:items-start md:items-start  xl:grid lg:grid md:grid gap-8 px-4 py-2'>
        
        {/* anasayfa col */}
        <div className='grid text-white gap-2'>

            <div className='flex justify-center items-center'>
                <MdHomeFilled className='text-xl' />
            </div>

            <div className='flex justify-center items-center'>
                <em className='text-xs'>Ana sayfa</em>
            </div>

        </div>
        {/* anasayfa col bitişi */}
        {/* shorts col */}
        <div className='grid text-white gap-2'>

            <div className='flex justify-center items-center'>
                <SiYoutubeshorts className='text-xl' />
            </div>

            <div className='flex justify-center items-center'>
                <em className='text-xs'>Shorts</em>
            </div>

        </div>
        {/* shorts col bitişi */}
        {/* mobile tasarım col */}
        <div className='grid text-white xl:hidden lg:hidden md:hidden'>

            <div className='flex justify-center items-center'>
                <CiCirclePlus className='text-3xl' />
            </div>

        </div>
        {/* mobile tasarım col bitişi */}
        {/* abonelikler col */}
        <div className='grid text-white gap-2'>

            <div className='flex justify-center items-center'>
                <MdSubscriptions className='text-xl' />
            </div>

            <div className='flex justify-center items-center'>
                <em className='text-xs'>Abonelikler</em>
            </div>

        </div>
        {/* abonelikler col bitişi */}
        {/* siz col */}
        <div className='grid text-white gap-2'>

            <div className='flex justify-center items-center'>
                <MdOutlineVideoLibrary className='text-xl' />
            </div>

            <div className='flex justify-center items-center'>
                <em className='text-xs'>Siz</em>
            </div>

        </div>
        {/* siz col bitişi */}
    </div>
  )
}

export default LessMenu