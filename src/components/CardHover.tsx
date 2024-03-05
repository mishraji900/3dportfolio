import { FC } from 'react';
import { HoverEffect } from '@/components/ui/card-hover-effect';

interface ProjectData {
  // Define the structure of your project data here
  // Example:
  name: string;
  description: string;
  gitUrl:string;
  previewUrl:string;
  image:string
  
}

interface Props {
  projectData: ProjectData[];
}

export const CardHover: FC<Props> = ({ projectData }) => {
  return (
    <div className="w-[70vw] mx-auto px-8">
      <HoverEffect items={projectData} />
    </div>
  );
};
