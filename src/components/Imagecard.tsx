"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
interface ThreeDCardDemoProps {
    imageSrc: string;
  }

export function ThreeDCardDemo({ imageSrc }: ThreeDCardDemoProps) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-300 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[14rem] md:w-[20rem] lg:w-[30rem] h-auto rounded-3xl p-3 border  ">
        
        <CardItem translateZ="100" className="w-full my-4">
          <Image
            src={imageSrc}
            height="625"
            width="625"
            className="lg:h-96 lg:w-96 md:h-72 md:w-72 h-44 w-44  object-cover rounded-full group-hover/card:shadow-xl mx-auto"
            alt="thumbnail"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
