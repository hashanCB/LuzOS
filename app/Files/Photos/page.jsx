'use client'
import ImageList from '@/app/Data/ImageList'
import { setzIndexClick } from '@/app/Redex/IconSelete'
import { setphotosindex, setphotosOneClick } from '@/app/Redex/PhotoSelect'
import Image from 'next/image'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const page = () => {
    const [list,setList] = useState(ImageList())
   
//redux
const isPhotosindex = useSelector((state)=>state.PhotoSelect.isPhotosindex)
const onClickphotos = useSelector((state)=>state.PhotoSelect.onClickphotos)

const dispath = useDispatch()

const DoubleClickfun = (index) =>{
  dispath(setphotosindex(index))
  dispath(setzIndexClick("photos"))
}
  return (
    <div className={` grid grid-cols-4  gap-4  p-5`}>
       
        { list && list.map((item , index) => (
            <div key={index} className={`flex gap-2 items-center  flex-col 
           `} 
            onDoubleClick={()=>DoubleClickfun(index)} 
            onClick={()=>dispath(setphotosOneClick(index))} >  
           
            <Image src={item.url} width={250} height={180} className={` ${onClickphotos === index ? ` bg-[#c9c9c9]/30 `: `bg-none`}  w-[80px] h-[50px]`} alt='video floder'  />
            <p className={` text-white flex text-center  ${onClickphotos === index ? `bg-blue-500 `: ` bg-none`}`}>{item.name}</p>
            </div>
        ))}
    </div>
  )
}

export default page