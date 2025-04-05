'use client'
import TopBar from '@/app/TopBar/page'
import Desktop from '@/app/Desktop/page'
import Floder from '@/app/Floder/page'
import { useSelector } from 'react-redux';
import DownBarDesktop from '@/app/DownBarDesktop/page'
import Videos from '@/components/Videos/page'
import { AnimatePresence } from 'framer-motion';
import VideoList from './Data/VideoList';

export default function Home() {
 const isSeleted = useSelector((state)=>state.IconSelete.isSeleted)
 const isVideoPlay = useSelector((state)=>state.VideoSelect.isVideoindex)
 console.log("page.js/reduxout" , isVideoPlay)

 const VideoLists = VideoList()
  return (
    <main className="h-screen w-screen bg-[url('/wallpaper/macos-monterey-stock-black-dark-mode-layers-5k-6016x6016-5889.jpg')] bg-cover bg-center overflow-hidden relative">
      {/* TopBar */}
      <TopBar />
      
      {/* Desktop Area */}
      <div className="h-[calc(100vh-2rem)] mt-8 relative">
        {/* Add desktop content here */}
        <Desktop />

        <AnimatePresence>
        {isSeleted  !== -1 ?  <Floder /> : [] }
        </AnimatePresence>

        <AnimatePresence>
        {isVideoPlay  !== -1 ?  <Videos url={VideoLists[isVideoPlay].url} /> : [] }
        </AnimatePresence>

        <DownBarDesktop/>
       
      </div>
    </main>
  );
}
