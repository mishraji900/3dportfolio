"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import Link from "next/link";
import { ActivityLogIcon, IdCardIcon } from "@radix-ui/react-icons";

export function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      link: "#intro",
      icon: <IconHome className="h-4 w-4 " />,
    },
    {
      name: "Who I Am",
      link: "#about",
      icon: <IconUser className="h-4 w-4 " />,
    },
    {
      name: "Skill Stack",
      link: "#about2",
      icon: <IdCardIcon className="h-4 w-4 " />,
    },
    {
      name: "My Works",
      link: "#projects",
      icon: <ActivityLogIcon className="h-4 w-4 " />,
    },
    {
      name: "Say Hello",
      link: "#contact",
      icon: (
        <IconMessage className="h-4 w-4 " />
      ),
    },
  ];
  return (
    <div>
      <FloatingNav navItems={navItems}/>
      <div className="flex justify-center z-50">
      <div className="flex relative space-x-10 border w-fit px-4 rounded-full my-4 py-2 h-10 text-sm bg-black/60">
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className="relative items-center flex space-x-1 hover:text-[#E11D48]"
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-sm">{navItem.name}</span>
          </Link>
        ))}
      </div>
    </div>
    </div>

  );
}
