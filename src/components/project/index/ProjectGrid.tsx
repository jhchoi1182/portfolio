import { useRef, useState } from "react";
import { projectCards } from "../../../assets/data/projectCard";
import useInfiniteScroll from "../../../hooks/useInfiniteScroll";
import useScrollToTop from "../../../hooks/useScrollToTop";
import ProjectCard from "../elements/ProjectCard";

const projectList = projectCards;
const sizes: {
  [key: string]: string;
} = {
  "Jihyeon's Portfolio": "w-full h-[600px] 2xl:w-[40%] xl:w-[42.5%]",
  개발로그: "w-full h-[800px] 2xl:w-[45%] xl:w-[47.5%]",
  "개인 기술 블로그 & Next Todo List":
    "w-full h-[600px] 2xl:w-[45%] xl:w-[47.5%]",
  Jjabflix: "w-full h-[900px] 2xl:w-[40%] xl:w-[42.5%]",
  쓰곰그리곰: "w-full h-[700px] 2xl:w-[45%] xl:w-[47.5%]",
  Consolog: "w-full h-[500px] 2xl:w-[45%] xl:w-[47.5%]",
};

function ProjectGrid() {
  const [projectArray, setProjectArray] = useState(projectList);
  const listRef = useRef<HTMLUListElement | null>(null);

  useInfiniteScroll(setProjectArray, projectList, listRef);
  useScrollToTop();

  return (
    <ul className="flex flex-wrap justify-between" ref={listRef}>
      {projectArray.map((project, i) => (
        <ProjectCard key={i} size={sizes[project.title]} data={project} />
      ))}
    </ul>
  );
}

export default ProjectGrid;
