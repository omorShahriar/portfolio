import React from "react";
import { FaUikit, FaReact } from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";
import { SiJamstack } from "react-icons/si";

export default function SkillCard({
  icon,
  skillDetails: { name, description },
}) {
  const IconsMap = {
    FaUikit,
    FaReact,
    GrGraphQl,
    SiJamstack,
  };
  const SkillIcon = IconsMap[icon] || null;
  return (
    <div className=" bg-themeGrey-default p-4 rounded-3xl w-8/12 md:w-full mx-auto">
      <SkillIcon className="md:text-5xl text-4xl mb-4" />

      <h3 className="md:mb-2 mb-1 md:text-2xl font-semibold text-xl">{name}</h3>
      <p className="md:text-base text-sm">{description}</p>
    </div>
  );
}
