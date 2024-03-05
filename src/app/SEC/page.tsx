import { TabsDemo } from '@/components/tabssec'
import React from 'react'

const page = () => {
  return (
    <div className='h-screen flex-1 items-center justify-center bg-[#000000]' id='about2'>
        <h1 className='text-4xl font-semibold text-center pt-14'>Few more things about me</h1>
        <TabsDemo/>
    </div>
  )
}

export default page