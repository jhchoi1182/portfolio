import { useState } from "react";
import { projectCards } from "../../../assets/data/projectCard";
import useNavigateWithLoading from "../../../hooks/useNavigateWithLoading";
import useScrollToTop from "../../../hooks/useScrollToTop";
import { center } from "../../../styles/classNames";
import ProjectList from "../elements/ProjectList";

function ProjectLists({ toggleAnimation }: { toggleAnimation: boolean }) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const navigateAfter500ms = useNavigateWithLoading();
  useScrollToTop();

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
              onClick={() =>
                navigateAfter500ms(`/portfolio/project/${project.path}`)
              }
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
