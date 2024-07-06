import React from 'react'
import Navbar from './Navbar'
import Card from './Card'
import { useState } from 'react'
import { useEffect } from 'react'
import ProjectApi from '../api/ProjectApi'

function Content() {
    const [project,setProject] = useState([])

    const [loading,setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setProject(ProjectApi)
        setLoading(false)
    },[])

  return (
    <div className="text-white mb-16">
        <Navbar />
        <div className='grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 mt-10'>
            {
                loading?<div className='text-white text-3xl'>yükleniyor</div>
                :
                project.map((dt,i) => (
                    <Card projectName={dt.projectName} projectImg={dt.projectImg} author={dt.author} views={dt.views} link={dt.link} i={i} />
                ))
            }


        </div>
    </div>
  )
}

export default Content