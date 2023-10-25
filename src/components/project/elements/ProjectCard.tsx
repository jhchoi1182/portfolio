import { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import useNavigateWithLoading from "../../../hooks/useNavigateWithLoading";
import { center, customDot } from "../../../styles/classNames";

type CssType = {
  [key: string]: {
    size: string;
    textColor: string;
  };
};

const css: CssType = {
  "Jihyeon's Portfolio": {
    size: "w-[40%] h-[600px]",
    textColor: "text-black",
  },
  개발로그: {
    size: "w-[45%] h-[800px]",
    textColor: "text-black",
  },
  "개인 기술 블로그 & Next Todo List": {
    size: "w-[45%] h-[600px]",
    textColor: "text-black",
  },
  Jjabflix: {
    size: "w-[40%] h-[900px]",
    textColor: "text-white",
  },
  쓰곰그리곰: {
    size: "w-[45%] h-[700px]",
    textColor: "text-black",
  },
  Consolog: {
    size: "w-[45%] h-[500px]",
    textColor: "text-white",
  },
};

function ProjectCard({
  data: { path, exp, date, title, img, techs },
}: {
  data: projectCard;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const navigateAfter500ms = useNavigateWithLoading();

  return (
    <li
      onClick={() => navigateAfter500ms(`/portfolio/project/${path}`)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative z-30 overflow-hidden ${css[title].size} rounded-2xl cursor-pointer mb-40 p-10 select-none`}
    >
      <img
        src={img}
        alt="Project"
        className={`absolute inset-0 object-cover w-full h-full
        transform transition-all duration-300 ease-in-out
        ${isHovered ? "scale-105" : "filter grayscale"}`}
      />
      <div className="relative flex flex-col justify-between w-full h-full font-notoSans text-lg font-semibold">
        <div
          className={`flex justify-between items-center ${css[title].textColor}`}
        >
          <div>
            <div className="flex gap-2">
              <h3>EXP</h3>
              <h3>{`00${exp}`}</h3>
            </div>
            <h3>{date}</h3>
          </div>
          <div className={`${center} w-14 h-14 bg-black rounded-full`}>
            {isHovered ? (
              <GoArrowUpRight className="w-6 h-6 text-white" />
            ) : (
              <div className="w-4 h-4 bg-white rounded-full" />
            )}
          </div>
        </div>
        <div className={`${css[title].textColor}`}>
          <h2 className="text-2xl mb-2">{title}</h2>
          <ul className="flex gap-[10px]">
            {techs.map((tech, i) => (
              <li
                key={i}
                className={`relative ${
                  i !== 0 ? `pl-[15px] ${customDot}` : ""
                } ${
                  css[title].textColor === "text-white" ? "before:bg-white" : ""
                }`}
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
}

export default ProjectCard;
