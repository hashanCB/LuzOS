'use client'

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isSeleted : [],
    isClick : -1
}
export const IconSelete = createSlice({
    name:"IconSelete",
    initialState,
    reducers:{
        DesktopIconSelect : (state,action) =>{
            state.isSeleted = [... state.isSeleted ,action.payload]
        },

        DesktopIconRemove : (state,action) =>{
            state.isSeleted = state.isSeleted.filter((ele,index)=>index !== action.payload) 
        },

        DesktopIconClick : (state,action) => {
            state.isClick = action.payload
        }
    }
})

export default IconSelete.reducer
export const {DesktopIconSelect , DesktopIconClick , DesktopIconRemove} = IconSelete.actions