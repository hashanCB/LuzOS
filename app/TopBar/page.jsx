'use client'
import { Bluetooth, Keyboard, Search, Wifi } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

const MenuList = ["File", "Edit", "Selection", "View", "Go", "Run", "Terminal", "Window", "Help"]

const WifiMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  
  return (
    <div className="absolute right-20 top-8 w-80 bg-[#1C1C1E] rounded-xl shadow-xl text-white overflow-hidden">
      <div className="p-4 border-b border-gray-700">
        <div className="flex justify-between items-center">
          <span className="text-lg font-medium">Wi-Fi</span>
          <div className="w-10 h-6 bg-[#0A84FF] rounded-full relative cursor-pointer">
            <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
          </div>
        </div>
      </div>
      
      <div className="p-3 border-b border-gray-700">
        <div className="text-sm text-gray-400">Weak Security (WPA)...</div>
      </div>

      <div className="p-3 border-b border-gray-700">
        <div className="text-gray-200 font-medium mb-2">Known Network</div>
        <div className="flex items-center gap-3">
          <div className="w-6 h-6">
            <Wifi className="w-full h-full text-white" />
          </div>
          <span className="flex-grow">Vodafone-813FB0_EXT</span>
          <div className="w-4 h-4">
            <Image 
              src="/Logo/lock.png" 
              width={16} 
              height={16} 
              alt="locked"
              className="opacity-80"
            />
          </div>
        </div>
      </div>

      <div className="p-3 border-b border-gray-700">
        <div className="flex items-center justify-between">
          <span>Other Networks</span>
          <span className="text-lg">›</span>
        </div>
      </div>

      <div className="p-3">
        <div className="text-[#0A84FF]">Wi-Fi Settings...</div>
      </div>
    </div>
  )
}

const TopBar = () => {
  const [isWifiOpen, setIsWifiOpen] = useState(false);

  return (
    <div className='fixed top-0 left-0 right-0 h-8 bg-black/40 backdrop-blur-md border-b  z-50'>
      <div className='flex items-center justify-between px-4 h-full'>
        {/* Left Section - Apple Logo and Menu */}
        <div className='flex items-center gap-6'>
          <Image 
            src="/Logo/apple-logo.svg" 
            width={16} 
            height={16} 
            alt='apple logo'
            className='opacity-80 hover:opacity-100 transition-opacity'
          />
          <ul className='flex gap-6'>
            {MenuList.map((item, index) => (
              <li 
                key={index}
                className='text-sm text-white hover:bg-black cursor-default'
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section - Status Icons */}
        <div className='flex items-center gap-6'>
          <div className='flex items-center gap-4'>
            <Bluetooth className='w-4 h-4 text-white' />
            <Keyboard className='w-4 h-4 text-white' />
            <Image 
              src="/Logo/battery.png" 
              width={16} 
              height={16} 
              alt='battery'
              className='opacity-80'
            />
            <div className="relative">
              <Wifi 
                className='w-4 h-4 text-white cursor-pointer' 
                onClick={() => setIsWifiOpen(!isWifiOpen)}
              />
              <WifiMenu isOpen={isWifiOpen} onClose={() => setIsWifiOpen(false)} />
            </div>
            <Search className='w-4 h-4 text-white' />
            <Image 
              src="/Logo/switch.png" 
              width={16} 
              height={16} 
              alt='switch'
              className='opacity-80 rotate-x-180'
            />
            <Image 
              src="/Logo/siri.png" 
              width={16} 
              height={16} 
              alt='siri'
              className='opacity-80'
            />
          </div>
          <div className='text-sm text-white'>
            {new Date().toLocaleString('en-US', {
              weekday: 'short',
              day: '2-digit',
              month: 'short',
              hour: '2-digit',
              minute: '2-digit',
              hour12: false
            }).replace(/,/g, '')}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar