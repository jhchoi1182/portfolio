import { useRef, useState } from "react";
import { projectCards } from "../../../assets/data/projectCard";
import { projectNames } from "../../../assets/data/projectName";
import useInfiniteScroll from "../../../hooks/useInfiniteScroll";
import ProjectCard from "../elements/ProjectCard";

const projectList = projectCards;
const sizes: {
  [key: string]: string;
} = {
  [projectNames.petProject]: "w-full h-[600px] 2xl:w-[44%] xl:w-[47.5%]",
  [projectNames.portfolio]: "w-full h-[600px] 2xl:w-[40%] xl:w-[42.5%]",
  [projectNames.gaebalLog]: "w-full h-[800px] 2xl:w-[45%] xl:w-[47.5%]",
  [projectNames.vlog]: "w-full h-[600px] 2xl:w-[45%] xl:w-[47.5%]",
  [projectNames.jjabflix]: "w-full h-[900px] 2xl:w-[40%] xl:w-[42.5%]",
  [projectNames.drawingBear]: "w-full h-[700px] 2xl:w-[45%] xl:w-[47.5%]",
  [projectNames.consolog]: "w-full h-[500px] 2xl:w-[45%] xl:w-[47.5%]",
};

function ProjectGrid() {
  const [projectArray, setProjectArray] = useState(projectList);
  const listRef = useRef<HTMLUListElement | null>(null);

  useInfiniteScroll(setProjectArray, projectList, listRef);

  return (
    <ul className="flex flex-wrap justify-between" ref={listRef}>
      {projectArray.map((project, i) => (
        <ProjectCard key={i} size={sizes[project.title]} data={project} />
      ))}
    </ul>
  );
}

export default ProjectGrid;
