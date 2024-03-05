import React from "react";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import Link from "next/link";
import Image from "next/image";

const MacbookScrollDemo = () => {
  return (
    <div className="overflow-hidden dark:bg-[#0B0B0F] bg-white w-full" id="home">
      <MacbookScroll
        title={
          <span>
            This Macbook runs on Tailwindcss. Seriously. <br/> <span className="text-rose-600">Scroll down to Meet the Wizard Behind the Web.</span>
          </span>
        }
        badge={
          <Link href="https://github.com/mishraji900">
            <Badge className="h-10 w-10 transform -rotate-12" />
          </Link>
        }
        src={`/liner.webp`}
        showGradient={false}
      />
    </div>
  );
};
// Peerlist logo
const Badge = ({ className }: { className?: string }) => {
  return (
    <div>
      <Image src={`/LetterM.svg`} width={20} height={20} alt="bage" className="h-10 w-10 text-white bg-rose-700 rounded-full -rotate-45"/>
    </div>

  );
};

export default MacbookScrollDemo;
