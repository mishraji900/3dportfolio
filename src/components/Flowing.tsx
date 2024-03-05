"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words = `Web Developer and Data analyst. An Indian tech maestro, blending HTML, CSS, JavaScript, C++, and Java with AI magic to craft extraordinary digital experiences. 🚀🌐💻
`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}
