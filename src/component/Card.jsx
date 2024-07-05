import React from 'react'
import { MdOutlineAccountCircle } from "react-icons/md";
function Card() {
  return (
    <div className='grid p-5'>
        <a href="">
            <div className='flex justify-center items-center'>
                <img src="../img/kapak.png" className='w-full' alt="" />
            </div>


            <div className='grid grid-cols-5 mt-5 ml-6'>

                <div className='col-span-1 mt-3'>
                    <MdOutlineAccountCircle className='text-4xl' />
                </div>

                <div className='grid col-span-4 gap-2'>
                    <h1>youtube clonu yapıyorumm</h1>
                    <i className='text-gray-500'>mücahit tekbaş</i>
                    <i className='text-sm'>1 m görüntülenme * 10 dakika önce</i>
                </div>

            </div>
        </a>
    </div>
  )
}

export default Card