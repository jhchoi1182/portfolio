import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { projectCards } from "../../../assets/data/projectCard";
import { center } from "../../../styles/classNames";
import ProjectList from "../elements/ProjectList";

function ProjectLists({ toggleAnimation }: { toggleAnimation: boolean }) {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const navigate = useNavigate();

  return (
    <>
      <div className="relative z-30 pb-[5%]">
        <div className="flex gap-2 items-center">
          <span className="text-2xl font-bold">All</span>
          <div
            className={`${center} w-10 h-6 rounded-full text-xl font-bold bg-inverse dark:bg-primary text-white dark:text-black`}
          >
            {projectCards.length}
          </div>
        </div>
        <ul className="pt-[1%]" onMouseLeave={() => setHoveredItem(null)}>
          {projectCards.map((project, i) => (
            <li
              key={i}
              onClick={() => navigate(`/portfolio/project/${project.path}`)}
            >
              <ProjectList
                data={project}
                hoveredItem={hoveredItem}
                setHoveredItem={toggleAnimation ? () => {} : setHoveredItem}
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
          ))}
        </ul>
      </div>
      {hoveredItem !== null && !toggleAnimation && (
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
