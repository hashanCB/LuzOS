'use client'

import { createSlice } from "@reduxjs/toolkit"
import Image from "next/image"

const initialState = {
 file : [],
 video : [],
}

export const CurrentTask = createSlice({
    name:"CurrentTask",
    initialState,
    reducers:{
        addFileTask:(state,action)=>{
            state.file = [...state.file,action.payload]
        },
        removeFileTask:(state,action)=>{
            state.file = [...state.file.filter((ele,index)=> ele !== action.payload )]
        },
        removesingaltaskfile:(state,action)=>{
            state.file = []
        },
        AddVideiTask : (state,action)=>{
            state.video = [...state.video,action.payload]
        }
    }
})

export default CurrentTask.reducer
export const { addFileTask , AddVideiTask , removeFileTask , removesingaltaskfile} = CurrentTask.actions