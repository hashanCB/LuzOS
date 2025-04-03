'use client'


import React, { useState } from 'react'
import Icone from './Icone'
import { useDispatch } from 'react-redux'
import { DesktopIconClick, DesktopIconSelect } from '../Redex/IconSelete'
import { FolderList } from '../Data/FolderList'


const floderList =FolderList()

const page = () => {
  const dispath = useDispatch()

  const SingalClick = (index) =>{
    dispath(DesktopIconSelect(index))
   
  }

  const OneClick = (index) => {
    dispath(DesktopIconClick(index))
  }
  return (
    <div className='flex justify-end'>
        <div className=' flex flex-col gap-4 p-5'>
      {floderList.map((item , index) => (
        <div  onDoubleClick={()=>SingalClick(index)} onClick={()=>OneClick(index)} key={index}>   <Icone values={index} name={item.name}  /> </div>
      
      ))}
 
    </div>
    </div>
  
  )
}

export default page