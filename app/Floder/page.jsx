'use client'

import React, { useState } from 'react'
import { BookA, Dock,LayoutGrid, Film,ChevronRight, Send,ArrowDownToLine,Columns3,PanelBottomDashed,File,House,Cloud ,SquareArrowOutUpRight, ArrowLeftIcon, ArrowRightIcon, List, TableCellsMerge, ChevronDown, ChevronsLeft, ChevronsRight, ChevronLeft, Share, Tag, CircleEllipsis, Search, X, Minus, Maximize, Maximize2} from 'lucide-react'
import { ScrollArea } from '@/components/ui/scroll-area'
import Draggable from "react-draggable";
import { useRef } from "react";
import { Resizable } from 'react-resizable'
import 'react-resizable/css/styles.css'
import { animate, motion,  } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux';
import { DesktopIconSelect } from '../Redex/IconSelete';
import Aboutme from '../Files/About/page';
import { FolderList } from '../Data/FolderList';
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
    const FolderLists = FolderList()
    const nodeRef = useRef(null);
    const [size, setSize] = useState({ width: 800, height: 500 })
    const iconHind = 400
    const onResize = (event, { size }) => {
        setSize({ width: size.width, height: size.height })
    }

    //redux
    const dispath = useDispatch()
    const isSelectFolder = useSelector((state)=>state.IconSelete.isSeleted)

  return (
    <motion.div 
    initial={{ opacity : 0 , scale: 0.9}}
    animate={{ opacity:100 , scale: 1}}
    exit={{ opacity:0 ,scale:0.9}}
    transition={{duration: 0.3}}
    >

<Draggable nodeRef={nodeRef} handle='#dragheder' cancel='#scroll-area'>
  

  
<Resizable
                width={size.width}
                height={size.height}
                onResize={onResize}
                minConstraints={[500, 100]}
                maxConstraints={[1600, 1000]}
                resizeHandles={['ne', 'nw', 'se', 'sw']}
               
            >
    <div ref={nodeRef} 
    style={{ width: size.width + 'px', height: size.height + 'px' }}
    className=' absolute -top-[500px] left-[300px]  bg-[#1C1C1E] border-2 border-white/40 rounded-xl z-[30] '>
        <div className=' flex m-4 ' style={{ width: size.width + 'px'}} >
                    {/* SIDER VIEW */}
                  
                      <div id='dragheder'  className=' flex flex-col gap-6 '>

                            {/* controll Button */}
                            <div className=' flex gap-2 group '>
                                <div className=' size-3 bg-[#fe5e56] rounded-full' onClick={()=>dispath(DesktopIconSelect(-1))}>
                                    <X className=' hidden group-hover:block text-black  size-3'/>
                                </div>
                                <div className=' size-3 bg-[#ffbb2c] rounded-full'>
                                <Minus className=' hidden group-hover:block text-black  size-3'/>
                                </div>
                                <div className='  size-3 bg-[#27c73f] rounded-full'>
                                 <Maximize2 className='  hidden group-hover:flex p-[2px] text-black  size-3 font-extrabold rotate-y-180'/>
                                </div>
                            </div>

                            {/* fav list */}
                    <ScrollArea id ="scroll-area" style={{ height: (size.height -100) + 'px'}} className="  w-[150px] rounded-md ">
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

                      <div className=' flex flex-col gap-2 w-full'>
                        
                            {/* nav bar in body */}
                            <div id ='dragheder' className=' flex  gap-4 items-center   '>
                                {/* start */}
                                <div className='  flex flex-3/12 gap-2 justify-start'>
                                        <div>
                                            <ChevronLeft className=' text-white' size={20}/>
                                        </div>
                                        <div>
                                            <ChevronRight  className=' text-white/10' size={20}/>
                                        
                                        </div>
                                        <div className=' w-[75px]'>
                                            <h1 className=' text-white  font-semibold truncate '>Hashan sdfsdf sdfsdf sdf </h1>
                                        </div>
                                </div>


                                {/* center */}
                                <div className=' flex  flex-6/12  min-w-0 gap-2  justify-center'>
                                    <div  >
                                    <LayoutGrid className={` text-white  ${size.width < 600 ? "hidden" : ""}` } size={20}/>
                                    </div>

                                    <div  >
                                    <List className={` text-white  ${size.width < 800 ? "hidden" : ""} ` } size={20} />
                                    </div>

                                    <div  >
                                    <Columns3 className={` text-white ${size.width < 800 ? "hidden" : ""} ` } size={20} />
                                    </div>

                                    <div className={` ${size.width < 600 ? "hidden" : ""}`} >
                                    <PanelBottomDashed className={` text-white ` } size={20}/>
                                    </div>
                                </div>

                                {/* end */}
                                <div className=' flex  flex-3/12   items-center gap-3 justify-end'>

                                            <div  className={` flex text-white  items-center  ${size.width < 600 ? "hidden" : ""}  `} size={20}>
                                            <TableCellsMerge className='flex-shrink-0' size={20}/>
                                                    
                                            <ChevronDown  size={16}/>
                                            </div>

                                            <div>
                                                        
                                             <Share className={` text-white ${size.width < 800 ? "hidden" : ""} `   } size={20} />
                                            </div>

                                            <div >
                                             <Tag className={`text-white rotate-y-180 ${size.width < 800 ? "hidden" : ""} `} size={20} />
                                            </div>
                                                    

                                            <div className={`items-center  flex text-white ${size.width < 600 ? "hidden" : ""} `} >
                                                
                                                    <CircleEllipsis size={20}/>
                                                    <ChevronDown size={16}/>
                                            
                                            </div>


                                            <div  className=' flex gap-2  mr-10 items-center ' >
                                            
                                            <Search className=' text-white/40' size={20}/>
                                            <input  type='text' className='w-[100px] focus:outline-none caret-white/30 border-none placeholder:text-white/40 text-white ' placeholder='Search'   />
                                            </div>
                                </div>
                            </div>
                            
                            
                            <div className='mt-5 pr-5 w-full h-full'>
                            {FolderLists &&  FolderLists[isSelectFolder]?.page}
                            </div>
                               
                      </div>
         
                    {/* MAIN VIEW */}
            <div>
      
            </div>
        </div>
    </div>
    </Resizable>
    </Draggable>
    </motion.div>
  )
}

export default page