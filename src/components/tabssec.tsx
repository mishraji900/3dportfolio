

import Image from "next/image";
import { Tabs } from "@/components/ui/tabs2";
import { client, urlFor } from "@/lib/sanity";
import { Link1Icon } from "@radix-ui/react-icons";
import Link from "next/link";

export function TabsDemo() {
  const tabs = [
    {
      title: "Skills",
      value: "skills",
      content: (
        <div className="h-[50vh] md:h-[60vh] lg:h-[70vh] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
          {/* Radial gradient for the container to give a faded look */}
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <DummyContentSkills />
        </div>
      ),
    },
    {
      title: "Education",
      value: "education",
      content: (
        <div className="h-[50vh] md:h-[60vh] lg:h-[70vh] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
          {/* Radial gradient for the container to give a faded look */}
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <DummyContentEducation />
        </div>
      ),
    },
    {
      title: "Certifications",
      value: "certifications",
      content: (
        <div className="h-[50vh] md:h-[60vh] lg:h-[70vh] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
          {/* Radial gradient for the container to give a faded look */}
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <DummyContentCertification />
        </div>
      ),
    },

  ];

  return (
    <div className="h-[20rem] md:h-[40rem]  [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full  items-center justify-center top-10 ">
      <Tabs tabs={tabs} />
    </div>
  );
}
async function getDataSkills() {
  const query = `*[_type == 'skills']`;
  const data = await client.fetch(query);
  return data;
}
const DummyContentSkills = async () => {
  const data = await getDataSkills();
  return (
    <div className="grid grid-cols-4 justify-evenly items-center md:gap-x-10 gap-x-4 z-20 h-full">
      {
        data && data.map((data: any) => (
          <div key={data._id} className="flex flex-row bg-gradient-to-br from-rose-950 to-rose-700 p-4 rounded-3xl justify-between items-center  shadow-md overflow-auto scroll-none ">
            <div className="flex flex-col">
              
              <Image src={urlFor(data.image.asset).url()} alt="icon" height={800} width={800} className="md:h-16 md:w-16 h-8 w-8"/>
              
            </div>

          </div>
        ))
      }
    </div>
  );
};
async function getDataEducation() {
  const query = `*[_type == 'edu']`;
  const data = await client.fetch(query);
  return data;
}
const DummyContentEducation = async () => {
  const data = await getDataEducation()
  return (
    <div className="md:flex-row flex-col justify-center items-center flex md:gap-4 z-20 w-[50vw]">
      {
        data && data.map((data: any) => (
          <div key={data._id} className="flex flex-row bg-gradient-to-br from-rose-950 to-rose-700  text-sm mt-5 p-4 rounded-xl justify-between items-center  shadow-md overflow-auto scroll-none ">
            <div className="flex flex-col w-[80vw] md:w-[40vw] space-y-2">
              <h1>{data.name}</h1><span className="">from</span><h2 className="">{data.description}</h2>
            </div>

          </div>
        ))
      }
    </div>
  );
};

async function getDataCertificate() {
  const query = `*[_type == 'certificate']`;
  const data = await client.fetch(query);
  return data;
}
const DummyContentCertification = async () => {
  const data = await getDataCertificate()
  return (
    <div className="flex-col justify-center flex z-20 w-[50vw]">
      {
        data && data.map((data: any) => (
          <div key={data._id} className="flex flex-row bg-gradient-to-br from-rose-950 to-rose-700  text-sm mt-5 p-4 rounded-xl justify-between items-center  shadow-md">
            <div className="flex flex-row text-wrap lg:w-[90vw] space-x-2">
              <h1>{data.name}</h1><span className="hidden md:block">from</span><h2 className="hidden md:block">{data.description}</h2>
            </div>
            <div className="">
              <Link href={data.previewUrl} target="blank"><Link1Icon /></Link>
            </div>
          </div>
        ))
      }
    </div>
  );
};
