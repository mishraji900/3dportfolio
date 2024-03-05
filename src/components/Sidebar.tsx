"use client"
import { ActivityLogIcon, IdCardIcon, PinLeftIcon, PinRightIcon } from '@radix-ui/react-icons';
import { IconHome, IconMessage, IconUser } from '@tabler/icons-react';
import Link from 'next/link';
import React, { useState } from 'react';
import { TooltipDemo } from './toolpick';

type NavItem = {
  id:number,
  name: string;
  link: string;
  icon: React.ReactNode;
}

type Props = {
  prop: boolean;
  setExpand: React.Dispatch<React.SetStateAction<boolean>>; // Function to set expand state
}

const Sidebar = ({ prop, setExpand }: Props) => {
  const navItems: NavItem[] = [
    {
      id:1,
      name: "Home",
      link: "#intro",
      icon: <IconHome className="h-6 w-6 " />,
    },
    {
      id:2,
      name: "Who I Am",
      link: "#about",
      icon: <IconUser className="h-6 w-6 " />,
    },
    {
      id:3,
      name: "Skill Stack",
      link: "#about2",
      icon: <IdCardIcon className="h-6 w-6 " />,
    },
    {
      id:4,
      name: "My Works",
      link: "#projects",
      icon: <ActivityLogIcon className="h-6 w-6 " />,
    },
    {
      id:5,
      name: "Say Hello",
      link: "#contact",
      icon: <IconMessage className="h-6 w-6 " />,
    },
  ];

  const handleLinkClick = () => {
    // Toggle expand state
    setExpand((prevState) => !prevState);
  };

  return (
    <div className={`overflow-hidden h-screen transition-all ease-in-out duration-500  text-2xl flex flex-col justify-center rounded-r-3xl fixed top-0 z-30 lg:bg-[#000000]/50 p-4 ${prop ? ' lg:w-[5rem] w-[20rem] bg-black' : "w-[5rem] "}`}>
      <div className='absolute  top-4 text-4xl text-rose-700 font-bold h-[8rem]  w-[18rem] block lg:hidden'>
        <img src='/Mayank.png' className={`overflow-hidden transition-all ${prop ? 'w-[13rem] h-[8vh]' : "w-0 h-0"}`} />
      </div>
      <div className={`overflow-hidden transition-all ml-2 text-2xl flex flex-col justify-between h-[40vh] ${prop ? ' w-[18rem]' : "w-[8rem]"}`}>
        {navItems.map((navItem: NavItem, idx: number) => (
          <div key={navItem.id}><Link
            
            href={navItem.link}
            onClick={handleLinkClick} // Add onClick event to trigger expand condition
            className="items-center space-x-8 flex lg:hidden hover:text-[#E11D48]"
          >
            <span className={`${prop ? "block" : "hidden"}`}>
              {navItem.icon}
            </span>

            <span className={`${prop ? "block" : "hidden"}`}>{navItem.name}</span>
          </Link>
            <Link 
              href={navItem.link}
              onClick={handleLinkClick} // Add onClick event to trigger expand condition
              className="items-center flex hover:text-[#E11D48]">
              <span className="lg:block hidden">
                <TooltipDemo icon={navItem.icon} name={navItem.name} />
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sidebar;
