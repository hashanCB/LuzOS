'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion} from 'framer-motion'
const FooterBarIcon = [
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
const page = () => {
    const [hover,setHover] = useState(undefined)
    console.log(hover-1)
  return (
    <div className='absulute bottom-0 left-0 right-0  '>
       
        <div 
      
        className=' group flex  justify-center mx-auto p-1 rounded-md bg-black/40 border-1 border-[#c9c9c9]/30 max-w-max'>
            {
                FooterBarIcon && FooterBarIcon.map((ele,index)=>(
                    <motion.div
                       
                        animate={{ scale : 
                            hover === index ? 4 : 
                           hover  === (index - 1) || hover  === (index + 1)  ? 3 :
                           hover  === (index - 2) || hover  === (index + 2)  ? 2 :
                            null,
                            
                        marginLeft:
                            hover === index  ? 50 :
                            hover === index - 1 || hover === index + 1 ? 40 :
                            hover === index - 2 || hover === index + 2 ? 20
                            
                            : 0, 
                        marginRight:
                            hover === index  ? 50 :
                            hover === index - 1 || hover === index + 1 ? 40 :
                            hover === index - 2 || hover === index + 2 ? 20
                            
                            : 0, 
                        marginTop:
                            hover === index ? -25 : 
                            hover === index -1 || hover === index + 1 ? -18 :
                            hover === index -2 || hover === index + 2 ? -10
                            : 0

                        
                        }
                            
                        
                        }
                    transition={{ type: "spring", stiffness: 250, damping: 15 }}
                    key={index}
                    onMouseEnter={()=>setHover(index)}
                    onMouseOut={()=>setHover(null)}
                   
                    >
                    {ele.url}
                    </motion.div>
                ))
            }

           
        </div>
       
    </div>
  )
}

export default page