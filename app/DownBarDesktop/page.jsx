'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { motion} from 'framer-motion'
import { useSelector } from 'react-redux'
import FooterBarIcon from '../Data/FooterBarIcon'

const FooterBarIconList = FooterBarIcon()
const page = () => {
    const [hover,setHover] = useState(undefined)
    const [cueentTask,setCurrntTak] = useState()

    //redux using get currentTask file
    const file = useSelector((state)=>state.CurrentTask.file)
  
    useEffect( ()=>{
    
        setCurrntTak(FooterBarIconList)
    },[])
  return (
    <div className='fixed bottom-0 left-0 right-0  '>
       
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
                    <div className=' flex flex-col items-center'>
                        <div className=' relative flex items-center'>
                            {ele.url}
                            {ele.name === 'Finder' && file.length > 0 ? 
                                    <div className=' absolute top-0 right-0 size-4 bg-red-500 rounded-full'>
                                    <p className=' text-[10px]  text-white flex items-center justify-center'>{file.length}</p>
                                </div>
                            : null}
                        </div>
                    {ele.name === 'Finder' && file && file.length ? <p className='size-[6px] rounded-full bg-gray-500'></p> : <p className='size-[6px]  '/>}
                    </div>
                    
                    </motion.div>
                ))
            }

           
        </div>
       
    </div>
  )
}

export default page