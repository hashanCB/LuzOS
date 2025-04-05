'use client'

import VideoList from '@/app/Data/VideoList'
import { setVideoOneClick, setVideosindex } from '@/app/Redex/VideoSelect'
import Image from 'next/image'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const page = () => {
    const [list,setList] = useState(VideoList())
//redux
const isVideoindex = useSelector((state)=>state.VideoSelect.isVideoindex)
const onClickVideoIndex = useSelector((state)=>state.VideoSelect.onClick)

const dispath = useDispatch()

  return (
    <div className={` grid grid-cols-4  gap-4  p-5`}>
        { list && list.map((item , index) => (
            <div key={index} className={`flex gap-2 items-center  flex-col 
           `} 
            onDoubleClick={()=>dispath(setVideosindex(index))} 
            onClick={()=>dispath(setVideoOneClick(index))} >  
           
            <Image src={'/Logo/vlc.png'} width={180} height={180} className={` ${onClickVideoIndex === index ? ` bg-[#c9c9c9]/30 `: `bg-none`}  w-[50px] h-[50px]`} alt='video floder'  />
            <p className={` text-white flex text-center  ${onClickVideoIndex === index ? `bg-blue-500 `: ` bg-none`}`}>{item.name}</p>
            </div>
        ))}
    </div>
  )
}

export default page