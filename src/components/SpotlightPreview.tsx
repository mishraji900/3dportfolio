import React from "react";
import { cn } from "@/utils/cn";
import { Spotlight } from "@/components/ui/Spotlight";
import { TextGenerateEffectDemo } from "./Flowing";
import { ThreeDCardDemo } from "./Imagecard";

export function SpotlightPreview() {

    const imageSrc = "/aboutprofile.jpg"

    return (
        <div className="h-[100vh] w-full rounded-md flex md:items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />
            <div className="flex md:flex-row flex-col-reverse items-center justify-center space-x-8 md:mx-10">
                <div className='lg:w-[50vw] md:w-[40vw] w-[60vw] text-center'>
                    <h1 className='text-2xl md:text-5xl font-semibold text-[]'>Hello, I'm{" "}
                        <span className='text-[#E11D48]'>
                            Mayank Mishra</span>
                    </h1>
                    <TextGenerateEffectDemo />
                </div>
                <div>
                    <ThreeDCardDemo imageSrc={imageSrc} />
                </div>
            </div>
        </div>
    );
}
