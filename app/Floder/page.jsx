'use client'

import React from 'react'
import { BookA, Dock, Film, Send,ArrowDownToLine,File,House,Cloud ,SquareArrowOutUpRight} from 'lucide-react'
import { ScrollArea } from '@/components/ui/scroll-area'
import Draggable from "react-draggable";
import { useRef } from "react";


const FavList = [
    {
        name : "AirDrop",
        url : <Send size={18}/>
        
    },
    {
        name: "Applications",
        url: <BookA  size={18} />
    },
    {
        name: "Movies",
        url: <Film  size={18} />
    },
    {
        name: "Desktop",
        url : <Dock size={18}/>
    },
    {
        name: "Downloads",
        url : <ArrowDownToLine size={18} />
    },
    {
        name: "Documents",
        url : <File size={18}/>
    },
    {
        name: "Hashan",
        url : <House size={18} />
    }
]

const iclundList = [
    {
        name: "iCloud Drive",
        url : <Cloud   size={18}/>
    },
    {
        name:"Shared Floders",
        url : <SquareArrowOutUpRight  size={18} />
    }
]

const tagsList = [ {
    name:"Red",
    coloer:  "bg-macread"
} ,
{
    name:"Orange",
    coloer:  "bg-macorange"
} ,
{
    name:"Yellow",
    coloer:  "bg-macyellow"
} ,
{
    name:"Green",
    coloer:  "bg-macgreen"
} ,
{
    name:"Blue",
    coloer:  "bg-macblue"
} ,
{
    name:"Purple",
    coloer:  "bg-macpurple" 
} ,
{
    name:"Gray",
    coloer:  "bg-macgray" 
}  ]
const page = () => {
    const nodeRef = useRef(null);


  return (

<Draggable nodeRef={nodeRef}>
    
    <div ref={nodeRef} className=' absolute  top-16 left-[20%]  h-[500px] w-[800px] bg-[#1C1C1E] border-2 border-white/40 rounded-xl'>
        <div className=' flex m-4'>
                    {/* SIDER VIEW */}
                  
                      <div className=' flex flex-col gap-6'>

                            {/* controll Button */}
                            <div className=' flex gap-2 '>
                                <div className=' size-3 bg-[#fe5e56] rounded-full'></div>
                                <div className=' size-3 bg-[#ffbb2c] rounded-full'></div>
                                <div className=' size-3 bg-[#27c73f] rounded-full'></div>
                            </div>

                            {/* fav list */}
                    <ScrollArea className="h-100  w-[150px] rounded-md ">
                            <div>
                                <label className=' text-mactext text-[12px] font-bold '>Favourites</label>
                                <ul className=' text-white mt-2'>
                                {FavList && FavList.map((item , index) => (
                                    <li key={index} className=' text-white text-[14px] flex gap-2 mb-2  '>
                                        <div className=' text-maclogoblue' >
                                            {item.url}
                                        </div>  
                                        
                                        <div>
                                            {item.name}
                                        </div>
                                        
                                    </li>
                                ))}
                                </ul>
                            </div>


                            {/* icloud list */}

                            <div>
                                <label className=' text-mactext text-[12px] font-bold '>iCloud</label>
                                <ul className=' text-white mt-2'>
                                {iclundList && iclundList.map((item , index) => (
                                    <li key={index} className=' text-white text-[14px] flex gap-2 mb-2  '>
                                        <div className=' text-maclogoblue' >
                                            {item.url}
                                        </div>  
                                        
                                        <div>
                                            {item.name}
                                        </div>
                                        
                                    </li>
                                ))}
                                </ul>
                            </div>


                            {/* Tags list */}

                            <div>
                                <label className=' text-mactext text-[12px] font-bold '>iCloud</label>
                                <ul className=' text-white mt-2'>
                                {tagsList && tagsList.map((item , index) => (
                                    <li key={index} className=' text-white text-[14px] flex gap-2 mb-2 items-center  '>
                                        <div className={` ${item.coloer} rounded-full  size-3`} >
                                            
                                        </div>  
                                        
                                        <div>
                                            {item.name}
                                        
                                        </div>
                                        
                                    </li>
                                ))}
                                </ul>
                            </div>
                         </ScrollArea>    

                     </div>

                      
         
                    {/* MAIN VIEW */}
            <div>
      
            </div>
        </div>
    </div>
    </Draggable>
  )
}

export default page