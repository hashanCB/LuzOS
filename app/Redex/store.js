'use client'

import { configureStore } from "@reduxjs/toolkit"
import { IconSelete } from "./IconSelete"

export const store =  configureStore({
    reducer:{
        IconSelete:IconSelete.reducer
    }
})