import React from "react";
import Image from "next/image";
function SkillElement({ urlAndName }) {
  return (
    <div>
      <div className="p-6 shadow-xl rounded-xl md:hover:scale-110 ease-in duration-300 dark:bg-[#7f5af0]">
        <div className="grid grid-cols-2 gap-4 ">
          <div className="flex items-center justify-center">
            <Image
              alt="/"
              width="64px"
              height="64px"
              src={`/assets/skills/${urlAndName}.png`}
            />
          </div>
          <div className="flex items-center justify-center">
            <h3 className="capitalize  text-xl md:text-lg text-[#0f0e17]">
              {urlAndName}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillElement;
