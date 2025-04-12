'use client'

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isSeleted : [],
    isClick : -1,
    MinSelected : [],
    zindexClick : null 
}
export const IconSelete = createSlice({
    name:"IconSelete",
    initialState,
    reducers:{

        setzIndexClick (state,action){
            state.zindexClick = action.payload
        },
        DesktopIconSelect : (state,action) =>{
            state.isSeleted = [... state.isSeleted ,action.payload]
        },

        DesktopIconRemove : (state,action) =>{
            state.isSeleted = state.isSeleted.filter((ele,index)=>index !== action.payload) 
        },

        DesktopIconClick : (state,action) => {
            state.isClick = action.payload
        },

        AddMinSeleted : (state,action) => {
            state.MinSelected = [...state.MinSelected, action.payload]
        },

        RemoveMinSeleted :(state,action) => {
            state.MinSelected = state.MinSelected.filter((ele,index)=> ele !== action.payload)
        },

        RemoveALLMinSeleted :(state,action) => {
            state.MinSelected = []
        },
    }
})

export default IconSelete.reducer
export const {setzIndexClick,DesktopIconSelect , DesktopIconClick , DesktopIconRemove , AddMinSeleted , RemoveMinSeleted , RemoveALLMinSeleted} = IconSelete.actions