import React from 'react'
import Header from '../component/Header'
import LessMenu from '../component/LessMenu'
import Content from '../component/Content'

function Index() {
  return (
    <>
      <Header />
      <div className='grid xl:grid-flow-col-dense lg:grid-flow-col-dense md:grid-flow-col-dense xl:grid-cols-8 lg:grid-cols-8 md:grid-cols-5'>
        
        <div className='fixed bottom-0 w-full z-50 xl:col-span-1 lg:col-span-1 md:col-span-1 xl:static lg:static md:static xl:flex lg:flex md:flex'>
            <LessMenu />
        </div>

        <div className="xl:col-span-7 lg:col-span-7 md:col-span-4">
            <Content />
        </div>

      </div>

    </>
  )
}

export default Index