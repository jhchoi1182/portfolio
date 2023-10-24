import { useState } from "react";
import { Link } from "react-router-dom";
import { projectCards } from "../../../assets/contents/projectCard";
import useScrollToTop from "../../../hooks/useScrollToTop";
import { center } from "../../../styles/classNames";
import ProjectList from "../elements/ProjectList";

const projectList = projectCards;

function ProjectLists() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useScrollToTop();

  return (
    <>
      <div className="relative z-30 pb-[5%]">
        <div className="flex gap-2 items-center">
          <span className="text-2xl font-bold">All</span>
          <div
            className={`${center} w-10 h-6 rounded-full text-xl font-bold bg-black dark:bg-white text-white dark:text-black`}
          >
            {projectList.length}
          </div>
        </div>
        <ul className="pt-[1%]" onMouseLeave={() => setHoveredItem(null)}>
          {projectList.map((project, i) => (
            <Link to={`/project/${project.path}`}>
              <li key={i}>
                <ProjectList
                  data={project}
                  hoveredItem={hoveredItem}
                  setHoveredItem={setHoveredItem}
                />
                <hr
                  className={`w-full h-[2px] ${
                    hoveredItem === null
                      ? "bg-gray-300 dark:bg-zinc-900"
                      : hoveredItem === project.exp
                      ? "bg-zinc-900 dark:bg-gray-300"
                      : "bg-gray-300 dark:bg-zinc-900"
                  }`}
                />
              </li>
            </Link>
          ))}
        </ul>
      </div>
      {hoveredItem !== null && (
        <img
          className="fixed z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[700px] object-contain opacity-90"
          src={projectCards[+hoveredItem - 1].img}
          alt={projectCards[+hoveredItem - 1].title}
        />
      )}
    </>
  );
}

export default ProjectLists;
