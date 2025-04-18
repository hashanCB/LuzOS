'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { motion} from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import FooterBarIcon from '../Data/FooterBarIcon'
import { RemoveALLMinSeleted, RemoveMinSeleted } from '../Redex/IconSelete'
import { addMinvideo } from '../Redex/VideoSelect'
import { addMinphotos } from '../Redex/PhotoSelect'

const FooterBarIconList = FooterBarIcon()
const page = () => {
    
    const [hover,setHover] = useState(undefined)
    const [cueentTask,setCurrntTak] = useState([])

    //redux using get currentTask file
    const file = useSelector((state)=>state.CurrentTask.file)
  
    const isVideoindex = useSelector((state)=>state.VideoSelect.isVideoindex)
    const isPhotosindex = useSelector((state)=>state.PhotoSelect.isPhotosindex)
  
    useEffect( ()=>{
    
        setCurrntTak(...cueentTask ,FooterBarIconList)
    },[])

    useEffect(()=>{
       
         const Photoicon =   {
                    name : "Photos",
                    url : <Image src={'/Logo/photos.png'} className=' w-[45px] h-[45px]' width={180} height={180} alt='apple photo' />
                }
                 const resetfooterbar = (removename) => {
                    const size = FooterBarIconList.length
                    const currentsize = cueentTask.length
                    if( currentsize > size) {
                        let findindex  = null
                       
                         if (removename === "Photo"){
                             findindex = cueentTask.findIndex((ele)=> ele.name === "Photos" )
                          const filterarrat = cueentTask.filter((ele,index)=> index !== findindex )
                             setCurrntTak(filterarrat)
                        }
                     
                    }
                 } 

       

        isPhotosindex !== -1 ?
        setCurrntTak([...cueentTask , Photoicon]) 
        : resetfooterbar("Photo")
     
    },[isPhotosindex])

    useEffect(()=>{
        const VideoIcone =   {
                    name : "VLC Player",
                    url : <Image src={'/Logo/vlcmain.png'} className=' w-[45px] h-[45px]' width={180} height={180} alt='apple vlc' />
                }
        
                const resetfooterbar = (removename) => {
                   const size = FooterBarIconList.length
                   const currentsize = cueentTask.length
                   if( currentsize > size) {
                       let findindex  = null
                       if (removename === "VLC" ){
                            findindex = cueentTask.findIndex((ele)=> ele.name === "VLC Player" )
                            const filterarrat = cueentTask.filter((ele,index)=> index !== findindex )
                            setCurrntTak(filterarrat)
                       }
                    
                    
                   }
                } 

       isVideoindex !== -1 ?
       setCurrntTak([...cueentTask , VideoIcone]) 
       : resetfooterbar("VLC")

    
   },[isVideoindex])



    const dispath = useDispatch()

    const filecontrol = (name) => {
        if(name === "Finder"){
            dispath(RemoveALLMinSeleted())
        }

        if (name === "VLC Player"){
            dispath(addMinvideo(null))
            
        }

        if (name === "Photos"){
            dispath(addMinphotos(null))
        }
      
    }
  return (
    <div className='fixed bottom-0 left-0 right-0 z-[999]  '>
       
        <div 
      
        className=' group flex  justify-center mx-auto p-1 rounded-md bg-black/40 border-1 border-[#c9c9c9]/30 max-w-max'>
            {
                cueentTask && cueentTask.map((ele,index)=>(
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
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    key={index}
                    onMouseEnter={()=>setHover(index)}
                    onMouseOut={()=>setHover(null)}
                   
                    >
                    <div className=' flex flex-col items-center ' onClick={()=>filecontrol(ele.name)}>
                        <div className=' relative flex items-center'>
                            {ele.url}
                            {ele.name === 'Finder' && file.length > 0 ? 
                                    <div className=' absolute top-0 right-0 size-4 bg-red-500 rounded-full'>
                                    <p className=' text-[10px]  text-white flex items-center justify-center'>{file.length}</p>
                                </div>
                            : null}
                        </div>
                    {ele.name === 'Finder' && file && file.length ? <p className='size-[4px] rounded-full bg-gray-500'></p> : <p className='size-[4px]  '/>}
                    
                    { (ele.name === 'VLC Player' || ele.name === "Photos" ) ? <p className='size-[4px] rounded-full bg-gray-500'></p> : <p className='size-[4px]  '/>}
                   
                    </div>
                    
                    </motion.div>
                ))
            }

           
        </div>
       
    </div>
  )
}

export default page