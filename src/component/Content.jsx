import React from 'react'
import Navbar from './Navbar'
import Card from './Card'

function Content() {
  return (
    <div className="text-white mb-16">
        <Navbar />
        <div className='grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mt-10'>
            <Card />
            <Card />
            <Card />

        </div>
    </div>
  )
}

export default Content