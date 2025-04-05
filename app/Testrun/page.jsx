'use client'
import React from 'react'
import Videos from '@/components/Videos/page'
import VideoList from '@/app/Data/VideoList';

const page = () => {

 const VideoLists = VideoList()
  return (
    <div>
         <Videos url={VideoLists[0].url} />
    </div>
  )
}

export default page