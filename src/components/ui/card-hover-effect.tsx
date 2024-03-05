"use client"
import { urlFor } from "@/lib/sanity";
import { cn } from "@/utils/cn";
import { GitHubLogoIcon, OpenInNewWindowIcon } from "@radix-ui/react-icons";
import { IconGitBranch } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    name: string;
    description: string;
    gitUrl: string;
    previewUrl: string;
    image: string
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-2",
        className
      )}
    >
      {items.map((item, idx) => (
        <div key={item.name} className="relative group  block p-2 h-full w-full" onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}>
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-rose-700/40 block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle className="text-md">{item.name}</CardTitle>
            <div className="lg:relative block overflow-hidden my-2">
              <img src={urlFor(item.image).url()} alt="" className="lg:w-[20vw] lg:h-[18vh]" />
              <CardDescription className="text-[9px] lg:text-xs absolute bg-[#000000]/80 lg:flex items-center justify-center -top-[1rem] opacity-0 transition-opacity duration-300 ease-in-out lg:hover:opacity-100 h-[18vh] p-2">{item.description}</CardDescription>
            </div>

            <div className="flex mt-2 gap-x-6 justify-center">
              <Link
                href={item?.gitUrl}
                target="blank"
              ><GitHubLogoIcon className="md:h-6 md:w-6 hover:text-rose-500"/></Link>
              <Link
                href={item?.previewUrl}
                target="blank"
              ><OpenInNewWindowIcon className="md:h-6 md:w-6 hover:text-rose-500"/></Link>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-2 overflow-hidden bg-black border border-transparent dark:border-rose-300/30 group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-2">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-1", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-4 text-white tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
