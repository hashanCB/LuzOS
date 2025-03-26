'use client'

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isSeleted : -1
}
export const IconSelete = createSlice({
    name:"IconSelete",
    initialState,
    reducers:{
        DesktopIconSelect : (state,action) =>{
            state.isSeleted = action.payload
        }
    }
})

export default IconSelete.reducer
export const {DesktopIconSelect} = IconSelete.actions