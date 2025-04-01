'use client'

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isSeleted : -1,
    isClick : -1
}
export const IconSelete = createSlice({
    name:"IconSelete",
    initialState,
    reducers:{
        DesktopIconSelect : (state,action) =>{
            state.isSeleted = action.payload
        },

        DesktopIconClick : (state,action) => {
            state.isClick = action.payload
        }
    }
})

export default IconSelete.reducer
export const {DesktopIconSelect , DesktopIconClick} = IconSelete.actions