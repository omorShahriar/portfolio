import ProjectCard from "./ProjectCard";
export default function Projects() {
  return (
    <div className=" grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
      <ProjectCard
        projectDetails={{
          projectName: "WebL Innovations",
          projectType: "Agency Website",
        }}
      />
    </div>
  );
}
