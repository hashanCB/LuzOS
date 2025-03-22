import { Bluetooth,Keyboard, Search, Wifi } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const MenuList = ["File","Edit","selection","View","Go","Run","Terminal","Windiws","Help"]
const page = () => {
  return (
    <div className=' flex gap-2 p-2 w-full '>
       

        <div className='flex flex-8/12 items-center gap-3'>
        <Image src={`/Logo/apple-logo.svg`} width={20} height={20}  alt='apple logo'/>
         <ul className=' flex  gap-4  '>
         {MenuList && MenuList.map((ele,index)=>(
                <li key={index}>{ele}</li>
            ))}
         </ul>
        </div>


        <div  className='flex flex-5/12 justify-end gap-4 items-center'>
            <Bluetooth className=' size-4'/>
            <Keyboard className=' size-4' />
            <Image src={'/Logo/battery.png'} width={20} height={20} alt='battery' className=' size-4' />
            <Wifi  className=' size-4'/>
            <Search className=' size-4'/>
            <Image src={'/Logo/switch.png'} width={10} height={10} alt='switch' className=' size-4' />
            <Image src={'/Logo/siri.png'} width={10} height={10} alt='siri' className=' size-4'/>
            <div> Sar 22 Mar 04:10</div>
        </div>
    </div>
  )
}

export default page