import { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import ViewButton from "./ViewButton";
import { center } from "../../../styles/classNames";
import { REACTIVE_COLOR } from "../../../styles/colors";

function ProjectLink({ data }: { data: projectMetaData }) {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);
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
              className={`${center} w-14 h-14 border ${REACTIVE_COLOR.primaryBorder} rounded-full`}
            >
              <AiFillGithub className="w-6 h-6" />
            </button>
          </a>
          {data.service && data.service[i] && (
            <ViewButton
              data={data}
              idx={i}
              title={title}
              hoveredButton={hoveredButton}
              setHoveredButton={setHoveredButton}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default ProjectLink;
