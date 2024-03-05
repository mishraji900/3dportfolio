import { FloatingNavDemo } from '@/components/Navbar'
import React from 'react'
import Intro from "@/app/Intro/page"
import About from "@/app/About/page"
import Sec from "@/app/SEC/page"
import Contact from "@/app/Contact/page"
import Projects from '../Projects/page'
const page = () => {
  return (
    <div className='bg-[#000000]'>
        <div className='h-screen'>
          <Intro/>
          <About/>
          <Sec/>
          <Projects/>
          <Contact/>
          
        </div>
        
    </div>
  )
}

export default page