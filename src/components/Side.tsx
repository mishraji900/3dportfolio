"use client"
import React from 'react'
import Sidebar from "@/components/Sidebar";
import { ActivityLogIcon, IdCardIcon, ModulzLogoIcon, PinLeftIcon, PinRightIcon } from '@radix-ui/react-icons';
import { useState } from 'react';

const Side = () => {
    const [expand, setExpand] = useState(false);
  return (
    <div style={{ position: 'relative' }}><button onClick={() => setExpand(curr => !curr)} className={`block lg:hidden z-50 transition-all ease-in-out duration-500 fixed ${expand ? 'left-60 top-8 fixed' : "left-4 top-8 fixed"}`} >
    {expand ? <PinLeftIcon className='h-12 w-12 font-bold bg-zinc-800/40 p-2 ' /> : <ModulzLogoIcon className='h-12 w-12 font-bold bg-zinc-800/40 p-2' />}
  </button>
  <Sidebar prop={expand} setExpand={setExpand} /> {/* Pass setExpand function to Sidebar */}</div>
  )
}

export default Side