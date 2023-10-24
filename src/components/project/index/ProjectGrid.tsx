import "../css/animation.css";
import { useRef, useState } from "react";
import { projectCards } from "../../../assets/contents/projectCard";
import useInfiniteScroll from "../../../hooks/useInfiniteScroll";
import ProjectCard from "../elements/ProjectCard";

const projectList = projectCards;

function ProjectGrid() {
  const [projectArray, setProjectArray] = useState(projectList);
  const listRef = useRef<HTMLUListElement | null>(null);

  useInfiniteScroll(setProjectArray, projectList, listRef);

  return (
    <ul className="flex flex-wrap justify-between" ref={listRef}>
      {projectArray.map(({ path, exp, date, title, img, techs }, i) => (
        <li key={i}>
          <ProjectCard
            path={path}
            exp={exp}
            date={date}
            title={title}
            img={img}
            techs={techs}
          />
        </li>
      ))}
    </ul>
  );
}

export default ProjectGrid;
