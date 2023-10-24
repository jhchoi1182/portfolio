import "../css/animation.css";
import { useRef, useState } from "react";
import { projectCards } from "../../../assets/contents/projectCard";
import useInfiniteScroll from "../../../hooks/useInfiniteScroll";
import useScrollToTop from "../../../hooks/useScrollToTop";
import ProjectCard from "../elements/ProjectCard";

const projectList = projectCards;

function ProjectGrid() {
  const [projectArray, setProjectArray] = useState(projectList);
  const listRef = useRef<HTMLUListElement | null>(null);

  useInfiniteScroll(setProjectArray, projectList, listRef);
  useScrollToTop();

  return (
    <ul className="flex flex-wrap justify-between" ref={listRef}>
      {projectArray.map((project, i) => (
        <li key={i}>
          <ProjectCard data={project} />
        </li>
      ))}
    </ul>
  );
}

export default ProjectGrid;
