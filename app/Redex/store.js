'use client'

import { configureStore } from "@reduxjs/toolkit"
import { IconSelete } from "./IconSelete"
import { Video } from "lucide-react"
import { VideoSelect } from "./VideoSelect"
import { CurrentTask } from "./CurrentTask"
import { PhotoSelect } from "./PhotoSelect"

export const store =  configureStore({
    reducer:{
        IconSelete:IconSelete.reducer,
        VideoSelect:VideoSelect.reducer,
        CurrentTask:CurrentTask.reducer,
        PhotoSelect:PhotoSelect.reducer
    }
})