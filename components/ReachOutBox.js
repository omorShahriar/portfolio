import React from "react";
import ReachLink from "./ReachLink";

export default function ReachOutBox() {
  return (
    <div className=" grid gap-8 sm:grid-cols-2 mt-20 ">
      <ReachLink type="tel" icon="RiPhoneFill">
        +8801703852186
      </ReachLink>
      <ReachLink type="mail" icon="MdAlternateEmail">
        omor.shahriar2000@gmail.com
      </ReachLink>
    </div>
  );
}
