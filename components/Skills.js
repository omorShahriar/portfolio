import React from "react";
import SkillCard from "./SkillCard";
export default function Skills() {
  return (
    <div className="text-slate-50 grid xl:grid-cols-6 md:grid-cols-2 gap-8">
      <SkillCard
        icon="FaUikit"
        skillDetails={{
          name: "UI / UX",
          description:
            "Familiar with design tools like figma, Adobe photoshop, Adobe illustrator ",
        }}
      />
      <SkillCard
        icon="FaReact"
        skillDetails={{
          name: "React",
          description: "Familiar with react and it’s ecosystem ",
        }}
      />
      <SkillCard
        icon="GrGraphQl"
        skillDetails={{
          name: "Graphql",
          description:
            "Familiar with querying and migrating data using graphql api",
        }}
      />
      <SkillCard
        icon="SiJamstack"
        skillDetails={{
          name: "Jamstack",
          description:
            "Familiar with creating website using jamstack architecture",
        }}
      />
    </div>
  );
}
