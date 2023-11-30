import { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { GoArrowUpRight } from "react-icons/go";
import { center } from "../../../styles/classNames";

function ProjectLink({ data }: { data: projectMetaData }) {
  const [isHovered, setHoveredButton] = useState<string | null>(null);
  const isTwoProject = data.title.split("&").length !== 1;

  return (
    <div className="flex gap-10">
      {data.title.split("&").map((title, i) => (
        <div
          key={i}
          className={`flex flex-col gap-6 ${
            isTwoProject ? "items-center" : ""
          }`}
        >
          {isTwoProject && <h5>{title}</h5>}
          <a
            className="text-4xl cursor-pointer"
            href={data.github[i]}
            rel="noreferrer"
            target="_blank"
          >
            <button
              className={`${center} w-14 h-14 border border-black rounded-full`}
            >
              <AiFillGithub className="w-6 h-6" />
            </button>
          </a>
          <a
            href={data.service ? data.service[i] : "#"}
            onClick={(e) => {
              if (!data.service) {
                e.preventDefault();
                alert("서비스가 만료되었습니다.");
              }
            }}
            rel="noreferrer"
            target="_blank"
          >
            <button
              className={`${center} gap-5 w-32 h-11 bg-inverse dark:bg-primary rounded-full`}
              onMouseEnter={() => setHoveredButton(title)}
              onMouseLeave={() => setHoveredButton(null)}
            >
              {isHovered === title ? (
                <GoArrowUpRight className="w-5 h-5 -ml-1 -mr-1 text-white dark:text-black" />
              ) : (
                <div className="w-3 h-3 bg-white dark:bg-black rounded-full" />
              )}
              <span className="text-xl font-semibold text-white dark:text-black">
                View
              </span>
            </button>
          </a>
        </div>
      ))}
    </div>
  );
}

export default ProjectLink;
