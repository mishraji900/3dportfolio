import { TabsDemo } from '@/components/Projecttabs'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-[#000000] h-fit lg:h-screen' id='projects'>
      <h1 className='md:text-3xl text-xl font-bold pb-8 text-center'>Projects</h1>
      <TabsDemo/>
    </div>
  )
}

export default page