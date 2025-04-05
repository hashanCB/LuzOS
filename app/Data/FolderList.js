import React from 'react'
import About from '../Files/About/page'
import Project from '@/app/Files/MyProject/page'
import Videos from '../Files/Videos/page'
export const FolderList = () => { 
    const list = [
        { name: "About Me", page: <About/> },
        { name: "My Projects", page: <Project/> },
        { name: "Videos", page: <Videos/>},
        { name: "Music", page: "/music" },
        { name: "Documents", page: "/documents" },
        { name: "Photos", page: "/photos" }
      ];
   return list
}


