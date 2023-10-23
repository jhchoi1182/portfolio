import "../css/animation.css";
import { useState } from "react";
import { projectCards } from "../../../assets/contents/projectCard";
import ProjectCard from "../elements/ProjectCard";

const projectList = projectCards;

function ProjectList() {
  const [projectArray, setProjectArray] = useState(projectList);

  return (
    <ul className="flex flex-wrap justify-between">
      {projectArray.map(({ path, exp, date, title, img, techs }) => (
        <li key={exp}>
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

export default ProjectList;
