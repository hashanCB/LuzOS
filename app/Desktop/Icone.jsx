'use client'
import Image from 'next/image'
import React from 'react'

const Icone = ({name}) => {
  return (
    <div className=' flex items-center flex-col text-white '>
         <Image src={'/Logo/floder.png'} width={60} height={60} alt='floder' />
         <p className=' font-bold text-[12px]'>{name}</p>
    </div>
  )
}

export default Icone