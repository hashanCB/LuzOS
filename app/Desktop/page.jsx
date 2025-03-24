'use cleint'


import React from 'react'
import Icone from './Icone'

const floderList = ["Hashan" , "MyProjects" , "Videos" , "Music" , "Documents" , "Images"]
const page = () => {
  return (
    <div className='flex justify-end'>
        <div className=' flex flex-col gap-4 p-5'>
      {floderList.map((item , index) => (
        <Icone key={index} name={item} />
      ))}
 
    </div>
    </div>
  
  )
}

export default page