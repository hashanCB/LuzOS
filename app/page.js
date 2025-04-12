'use client'
import TopBar from '@/app/TopBar/page'
import Desktop from '@/app/Desktop/page'
import Floder from '@/app/Floder/page'
import { useSelector } from 'react-redux';
import DownBarDesktop from '@/app/DownBarDesktop/page'
import Videos from '@/components/Videos/page'
import { AnimatePresence } from 'framer-motion';
import VideoList from './Data/VideoList';
import { FolderList } from './Data/FolderList';

export default function Home() {

 const isVideoPlay = useSelector((state)=>state.VideoSelect.isVideoindex)


 const VideoLists = VideoList()
 const FolderLists = FolderList()
 const isSelectFolder = useSelector((state)=>state.IconSelete.isSeleted)
 const zindexClick = useSelector((state)=>state.IconSelete.zindexClick) 
  let orderCount = 0
  return (
    <main className="h-screen w-screen bg-[url('/wallpaper/macos-monterey-stock-black-dark-mode-layers-5k-6016x6016-5889.jpg')] bg-cover bg-center overflow-hidden relative">
      {/* TopBar */}
      <TopBar />
      
      {/* Desktop Area */}
      <div className="h-[calc(100vh-2rem)] mt-8 relative">
        {/* Add desktop content here */}
        <Desktop />

        {isSelectFolder.length > 0 && isSelectFolder.map((ele,index)=>(
          <div key={index}>
              <AnimatePresence>
                {(isSelectFolder && isSelectFolder.length > 0  ) ?  <Floder pageurl={FolderLists[ele]?.page} count={index} ele ={ele} zindex = { ele === zindexClick ? "900" : 30}/> : [] }
                { orderCount++ }
            </AnimatePresence>

          </div>
        ))}
     

        <AnimatePresence>
        {isVideoPlay  !== -1 ?  <Videos url={VideoLists[isVideoPlay].url} zindexvideo = { "video" === zindexClick ? "900" : 30} /> : [] }
        </AnimatePresence>

        <DownBarDesktop/>
       
      </div>
    </main>
  );
}
