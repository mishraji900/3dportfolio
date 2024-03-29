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
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border  ">
        
        <CardItem
          translateZ="100"
          rotateX={20}
          rotateZ={-10}
          className="w-fit"
        >
          <Image
            src={imageSrc}
            height="4980"
            width="4000"
            className="h-60 w-56 object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        
      </CardBody>
    </CardContainer>
  );
}
