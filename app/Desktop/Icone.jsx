'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DesktopIconSelect } from '../Redex/IconSelete'



const Icone = ({name,values}) => {
  const isSeleted = useSelector((state)=>state.IconSelete.isSeleted)


  return (
    <div className=' flex items-center flex-col text-white gap-1 ' >
         <Image src={'/Logo/floder.png'} width={60} height={60} alt='floder'  priority className={values !== isSeleted ? `` : ' border-1 border-[#c9c9c9]/30 '}/>
         <p className={values !== isSeleted ? `font-bold text-[12px]` : 'font-bold text-[12px] bg-blue-600'} >{name}</p>
    </div>
  )
}

export default Icone