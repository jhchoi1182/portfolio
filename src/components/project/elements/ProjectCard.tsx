import { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import useNavigateWithLoading from "../../../hooks/useNavigateWithLoading";
import { center, customDot } from "../../../styles/classNames";
import preloadDetailImage from "../../../utils/preloadDetailImage";

interface Props {
  isDetailPage?: boolean;
  size: string;
  data: projectCard;
}

const textColor: {
  [key: string]: string;
} = {
  "Jihyeon's Portfolio": "text-black",
  개발로그: "text-black",
  "개인 기술 블로그 & Next Todo List": "text-black",
  Jjabflix: "text-white",
  쓰곰그리곰: "text-black",
  Consolog: "text-white",
};

function ProjectCard({
  isDetailPage,
  size,
  data: { path, exp, date, title, img, techs, image },
}: Props) {
  const [isHovered, setIsHovered] = useState(false);
  const navigateAfter500ms = useNavigateWithLoading();

  const handleOnMouseEnter = () => {
    setIsHovered(true);
    preloadDetailImage(image);
  };

  return (
    <li
      onClick={() => navigateAfter500ms(`/portfolio/project/${path}`)}
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative z-30 overflow-hidden ${size} rounded-2xl cursor-pointer ${
        isDetailPage ? "" : "mb-40"
      } p-10 select-none`}
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
          className={`flex justify-between items-center ${textColor[title]}`}
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
        <div className={`${textColor[title]}`}>
          <h2 className="text-2xl mb-2">{title}</h2>
          <ul className="flex gap-[10px]">
            {techs.map((tech, i) => (
              <li
                key={i}
                className={`relative ${
                  i !== 0 ? `pl-[15px] ${customDot}` : ""
                } ${
                  textColor[title] === "text-white" ? "before:bg-white" : ""
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
