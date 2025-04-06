import Image from 'next/image'
import React from 'react'

const FooterBarIcon = () => {
    const  FooterBarIcon = [
        {
            name : "Finder",
            url : <Image src={'/Logo/finder.png'} className=' w-[45px] h-[45px]' width={180} height={180} alt='apple finder' />
        },
        {
            name : "LunchPad",
            url : <Image src={'/Logo/Lunchpad.png'} className=' w-[45px] h-[45px]' width={180} height={180} alt='apple Lounchpad' />
        },
        {
            name : "Messages",
            url : <Image src={'/Logo/imsg.png'} className=' w-[45px] h-[45px]' width={180} height={180} alt='apple imsg' />
        },
        {
            name : "Safari",
            url : <Image src={'/Logo/safari.png'} className=' w-[45px] h-[45px]' width={180} height={180} alt='apple imsg' />
        },
        {
            name : "Mail",
            url : <Image src={'/Logo/mail.png'} className=' w-[45px] h-[45px]' width={180} height={180} alt='apple imsg' />
        },
        {
            name : "Note",
            url : <Image src={'/Logo/note.png'} className=' w-[45px] h-[45px]' width={180} height={180} alt='apple imsg' />
        },
        {
            name : "Calculator",
            url : <Image src={'/Logo/cal.png'} className=' w-[45px] h-[45px]' width={180} height={180} alt='apple imsg' />
        },
        {
            name : "App Store",
            url : <Image src={'/Logo/appstore.png'} className=' w-[45px] h-[45px]' width={180} height={180} alt='apple imsg' />
        },
        {
            name : "Systerm Settings",
            url : <Image src={'/Logo/setting.png'} className=' w-[45px] h-[45px]' width={180} height={180} alt='apple imsg' />
        },
        {
            name : "WhatsApp",
            url : <Image src={'/Logo/whatsapp.png'} className=' w-[45px] h-[45px]' width={180} height={180} alt='apple imsg' />
        },
        {
            name : "Bin",
            url : <Image src={'/Logo/bin.png'} className=' w-[45px] h-[45px]' width={180} height={180} alt='apple imsg' />
        },
    ]

  return FooterBarIcon
}

export default FooterBarIcon