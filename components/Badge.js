import React from "react";
import { FaGithub } from "react-icons/fa";
import { TiArrowForward } from "react-icons/ti";

export default function Badge({ icon, link, children }) {
  const iconsMap = {
    FaGithub,
    TiArrowForward,
  };
  const Icon = iconsMap[icon] || iconsMap[TiArrowForward];
  return (
    <a
      href={link || "#"}
      className=" inline-block rounded-3xl px-6 py-2 bg-themeGrey-default hover:bg-themeGrey-light transition-all cursor-pointer duration-300"
    >
      <div className="flex items-center gap-2 text-base text-slate-50 ">
        <Icon className="" />
        {children}
      </div>
    </a>
  );
}
