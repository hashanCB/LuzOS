'use client'

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isPhotosindex : -1,
    onClickphotos : -1,
    MinPhotos : null
}
export const PhotoSelect = createSlice({
    name:"PhotosSelect",
    initialState,
    reducers:{
        
        setphotosindex:(state,action)=>{
            state.isPhotosindex = action.payload
        },
        setphotosOneClick : (state,action)=>{
            state.onClickphotos = action.payload
        },

        addMinphotos : (state,action)=>{
            state.MinPhotos = action.payload
        }

    }
})

export default PhotoSelect.reducer
export const {setphotosindex,setphotosOneClick , addMinphotos} = PhotoSelect.actions