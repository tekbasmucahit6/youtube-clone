import React from 'react'
import { FaRegCompass } from "react-icons/fa6";
function Navbar() {
  return (
    <div className='flex justify-center xl:justify-start lg:justify-start md:justify-start items-center gap-3 text-white pt-4'>
        <i className='bg-[rgb(39,39,39)] hover:bg-[rgb(45,45,45)] transition-all cursor-pointer px-3 py-1 xl:py-2 lg:py-2 md:py-2 flex xl:hidden lg:hidden md:hidden text-2xl'><FaRegCompass /></i>
        <i className='bg-white text-black rounded-xl px-3 py-1 xl:py-2 lg:py-2 md:py-2'>Tümü</i>
        <i className='bg-[rgb(39,39,39)] hover:bg-[rgb(45,45,45)] transition-all cursor-pointer rounded-xl px-3 py-1 xl:py-2 lg:py-2 md:py-2'>Oyun</i>
        <i className='bg-[rgb(39,39,39)] hover:bg-[rgb(45,45,45)] transition-all cursor-pointer rounded-xl px-3 py-1 xl:py-2 lg:py-2 md:py-2'>Müzik</i>
        <i className='bg-[rgb(39,39,39)] hover:bg-[rgb(45,45,45)] transition-all cursor-pointer rounded-xl px-3 py-1 xl:py-2 lg:py-2 md:py-2'>Mix'ler</i>
        <i className='bg-[rgb(39,39,39)] hover:bg-[rgb(45,45,45)] transition-all cursor-pointer rounded-xl px-3 py-1 xl:py-2 lg:py-2 md:py-2 hidden xl:flex lg:flex md:flex'>Aksion-macera oyunları</i>
        <i className='bg-[rgb(39,39,39)] hover:bg-[rgb(45,45,45)] transition-all cursor-pointer rounded-xl px-3 py-1 xl:py-2 lg:py-2 md:py-2 hidden xl:flex lg:flex'>Son yüklenenler</i>
        <i className='bg-[rgb(39,39,39)] hover:bg-[rgb(45,45,45)] transition-all cursor-pointer rounded-xl px-3 py-1 xl:py-2 lg:py-2 md:py-2 hidden xl:flex lg:flex'>İzlenenler</i>
        <i className='bg-[rgb(39,39,39)] hover:bg-[rgb(45,45,45)] transition-all cursor-pointer rounded-xl px-3 py-1 xl:py-2 lg:py-2 md:py-2 hidden xl:flex lg:flex'>Yeni öneriler</i>
    </div>
  )
}

export default Navbar