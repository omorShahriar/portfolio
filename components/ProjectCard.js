import Badge from "./Badge";

export default function ProjectCard({ projectDetails }) {
  return (
    <div className="text-slate-50 w-8/12 md:w-full mx-auto">
      <div className=" rounded-3xl overflow-hidden mb-2">
        <img className=" object-cover object-center " src="/projectOne.jpg" />
      </div>
      <div className="flex gap-2 mb-4">
        <Badge icon="FaGithub" link="">
          Code
        </Badge>
        <Badge icon="TiArrowForward" link="">
          Live
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
