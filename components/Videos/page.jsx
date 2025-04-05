'use client'
import { setVideosindex } from '@/app/Redex/VideoSelect';
import { Maximize2, Minus, X } from 'lucide-react';
import React, { useRef, useState } from 'react';
import Draggable from 'react-draggable';
import ReactPlayer from 'react-player';
import { useDispatch } from 'react-redux';
import { Resizable } from 'react-resizable';
import 'react-resizable/css/styles.css'; 
import {motion} from 'framer-motion'
const VideoPlayer = ({ url }) => {
  const nodeRef = useRef(null);
     const [size, setSize] = useState({ width: 800, height: 500 })
     const onResize = (event, { size }) => {
      setSize({ width: size.width, height: size.height })
  }
  const dispath = useDispatch()

  return (
  
 <Draggable nodeRef={nodeRef} handle='#halder-drag'>
 <div
        ref={nodeRef}
        className="absolute z-[50] top-5 left-5"
        style={{ width: size.width, height: size.height }}
      >
<Resizable
                width={size.width}
                height={size.height}
                onResize={onResize}
                minConstraints={[500, 100]}
                maxConstraints={[1600, 1000]}
                resizeHandles={['ne', 'nw', 'se', 'sw']}
                className=' absolute z-[50]'
            >
    <div
     
    className="absolute z-[50] top-[20px] left-[10px]  p-1 rounded-b-md ">
      <div id='halder-drag' className='bg-[#1C1C1E] h-6 flex items-center rounded-t-md   '>
         
         <div className=' flex gap-2 group m-2 ml-4 items-center '>
                   <div className=' size-3 bg-[#fe5e56] rounded-full'  onClick={()=> dispath(setVideosindex(-1))}>
                       <X className=' hidden group-hover:block text-black  size-3'/>
                  </div>
                  <div className=' size-3 bg-[#ffbb2c] rounded-full'>
                   <Minus className=' hidden group-hover:block text-black  size-3'/>
                    </div>
                   <div className='  size-3 bg-[#27c73f] rounded-full'>
                    <Maximize2 className='  hidden group-hover:flex p-[2px] text-black  size-3 font-extrabold rotate-y-180'/>
                     </div>
         </div>
         

          <div>
            {/* titile */}
          </div>
      </div>
         
      <div className=' rounded-b-md '>
          <ReactPlayer 
            url={url} 
            controls={true}    // Show built-in controls (play, pause, volume, etc.)
            playing={true} 
            width="100%"       // Make the video responsive
            height="100%"      // Set the height based on the container
          />
      </div>
   
    </div>
    </Resizable>
    </div>
    </Draggable>
  
  );
};

export default VideoPlayer;
