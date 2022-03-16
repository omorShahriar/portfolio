import Badge from "./Badge";
import Image from "next/image";
export default function ProjectCard({ projectDetails }) {
  return (
    <div className="text-slate-50 w-10/12 md:w-full mx-auto">
      <div className=" rounded-lg  overflow-hidden mb-2">
        <a
          href="https://www.weblinnovations.com"
          target="_blank"
          rel="noreferrer"
          className=" h-full block "
        >
          <Image
            className=" object-cover object-center transition-all duration-300 hover:scale-110   "
            src="/projectOne.jpg"
            width={1404 / 2}
            height={838 / 2}
            alt="webl project thumbnail"
          />
        </a>
      </div>
      <div className="flex gap-2 mb-4">
        <Badge icon="FaGithub" link="">
          <a
            href="https://github.com/omorShahriar/webl-website"
            target="_blank"
            rel="noreferrer"
          >
            Code
          </a>
        </Badge>
        <Badge icon="TiArrowForward" link="">
          <a
            href="https://www.weblinnovations.com"
            target="_blank"
            rel="noreferrer"
          >
            Live
          </a>
        </Badge>
      </div>
      <h3 className=" font-medium md:text-2xl text-lg ">
        {projectDetails?.projectName}
      </h3>
      <p className=" md:text-sm text-xs">
        <span className=" font-semibold ">Type : </span>
        {projectDetails?.projectType}
      </p>
    </div>
  );
}
