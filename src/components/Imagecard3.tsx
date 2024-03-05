"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var">
      <CardBody className=" relative group/card  dark:hover:shadow-2xl dark:hover:shadow-rose-500/[0.3] lg:w-[50vw] md:w-[70vw] w-[60vw] justify-center h-auto rounded-xl p-6 flex md:flex-row flex-col-reverse ">
        <CardItem
          translateZ="50"
          className="text-base w-[50vw] text-center font-medium text-neutral-600 dark:text-white"
        >
          Delighted to introduce a tech enthusiast from India! 🇮🇳✨ Proficient in Front-End Development, Web Design, Software Development, and now venturing into Machine Learning and AI, there's a readiness to create digital marvels. 🚀🤖 By harmonizing HTML, CSS, Tailwind CSS, and JavaScript with C++ and Java, we aim to infuse AI magic to redefine digital landscapes. 🎶💻🌐 With an insatiable curiosity and a drive for knowledge, the focus is on turning concepts into extraordinary realities! 🌟🔍 Join us on this exhilarating journey! 🌈💫
        </CardItem>
        
        
        
      </CardBody>
    </CardContainer>
  );
}
