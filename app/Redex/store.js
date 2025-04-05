'use client'

import { configureStore } from "@reduxjs/toolkit"
import { IconSelete } from "./IconSelete"
import { Video } from "lucide-react"
import { VideoSelect } from "./VideoSelect"

export const store =  configureStore({
    reducer:{
        IconSelete:IconSelete.reducer,
        VideoSelect:VideoSelect.reducer
    }
})