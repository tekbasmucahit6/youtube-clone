import React from 'react'
import { MdOutlineAccountCircle } from "react-icons/md";
function Card( { projectName,projectImg,author,views,link,i } ) {
  return (
    <div className='grid p-5 transition-all' key={i}>
        <a href={link}>
            <div className='flex justify-center items-center'>
                <img src={projectImg} className='w-72' alt="" />
            </div>


            <div className='grid grid-cols-5 mt-5 ml-6'>

                <div className='col-span-1 mt-3'>
                    <MdOutlineAccountCircle className='text-4xl' />
                </div>

                <div className='grid col-span-4 gap-2'>
                    <h1>{projectName}</h1>
                    <i className='text-gray-500'>{author}</i>
                    <i className='text-sm'>{views}</i>
                </div>

            </div>
        </a>
    </div>
  )
}

export default Card