import { useRef, useState } from "react";
import { projectCards } from "../../../assets/data/projectCard";
import useInfiniteScroll from "../../../hooks/useInfiniteScroll";
import useScrollToTop from "../../../hooks/useScrollToTop";
import ProjectCard from "../elements/ProjectCard";

type Sizes = {
  [key: string]: string;
};

const projectList = projectCards;
const sizes: Sizes = {
  "Jihyeon's Portfolio": "w-[40%] h-[600px]",
  개발로그: "w-[45%] h-[800px]",
  "개인 기술 블로그 & Next Todo List": "w-[45%] h-[600px]",
  Jjabflix: "w-[40%] h-[900px]",
  쓰곰그리곰: "w-[45%] h-[700px]",
  Consolog: "w-[45%] h-[500px]",
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
