import Image from "next/image";
import React from "react";
import propertyImg from "../public/assets/projects/property.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const property = () => {
  return (
    <div className="w-full min-h-[150vh]">
      <div className="relative w-full h-[30vh] lg:h-[40vh]">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10"></div>
        <Image
          className="absolute z-1"
          src={propertyImg}
          layout="fill"
          alt="/"
          objectFit="cover"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Property Finder</h2>
          <h3>React JS / Tailwind / Firebase</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-5 gap-8 pt-8 px-4 md:px-8">
        <div className="md:col-span-4">
          <div className="flex h-full flex-col  justify-center">
            <p className=" text-lg">Project</p>
            <h2 className="pb-6">Overview</h2>
            <p>
              I&apos;m focused on building responsive front-end web applications
              while learning back-end technologies. I&apos;m focused on building
              responsive front-end web applications while learning back-end
              technologies. I&apos;m focused on building responsive front-end
              web applications while learning back-end technologies.
            </p>
            <div className="pt-2">
              <button className=" px-8 py-3 mt-4 mr-8">Code</button>
              <button className="px-8 py-3 mt-4">Demo</button>
            </div>
          </div>
        </div>
        <div className="md:col-span-1 shadow-xl rounded-xl shadow-gray-400 p-4">
          <div className="text-left md:text-center text-xl font-bold py-5">
            <p>Technologies</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-1">
            <p className="text-gray-600 py-2 flex items-center">
              <RiRadioButtonFill className="pr-1" /> React
            </p>
            <p className="text-gray-600 py-2 flex items-center">
              <RiRadioButtonFill className="pr-1" /> Tailwind
            </p>
            <p className="text-gray-600 py-2 flex items-center">
              <RiRadioButtonFill className="pr-1" /> Javascript
            </p>
            <p className="text-gray-600 py-2 flex items-center">
              <RiRadioButtonFill className="pr-1" /> Firebase
            </p>
            <p className="text-gray-600 py-2 flex items-center">
              <RiRadioButtonFill className="pr-1" /> Google API
            </p>
            <p className="text-gray-600 py-2 flex items-center">
              <RiRadioButtonFill className="pr-1" /> Zillow API
            </p>
          </div>
        </div>
        <div>
          <Link href="/#projects">
            <p className="underline cursor-pointer">Back to projects</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default property;
