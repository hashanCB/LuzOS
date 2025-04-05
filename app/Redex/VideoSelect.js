'use client'

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isVideoindex : -1,
    onClick : -1
}
export const VideoSelect = createSlice({
    name:"VideoSelect",
    initialState,
    reducers:{
        
        setVideosindex:(state,action)=>{
            state.isVideoindex = action.payload
        },
        setVideoOneClick : (state,action)=>{
            state.onClick = action.payload
        }

    }
})

export default VideoSelect.reducer
export const {setVideosindex,setVideoOneClick} = VideoSelect.actions