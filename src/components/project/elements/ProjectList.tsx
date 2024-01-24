import { GoArrowUpRight } from "react-icons/go";
import { center, customDot } from "../../../styles/classNames";
import preloadDetailImage from "../../../utils/preloadDetailImage";

interface Props {
  data: projectCard;
  hoveredItem: number | null;
  setHoveredItem: React.Dispatch<React.SetStateAction<number | null>>;
}

function ProjectList({
  data: { exp, date, title, techs, image },
  hoveredItem,
  setHoveredItem,
}: Props) {
  const handleOnMouseEnter = () => {
    setHoveredItem(exp);
    preloadDetailImage(image);
  };

  return (
    <div
      className={`flex justify-between items-center py-12 text-base font-notoSans cursor-pointer lg:text-lg ${
        hoveredItem === null
          ? "opacity-100"
          : hoveredItem === exp
          ? "opacity-100"
          : "opacity-30"
      }`}
      onMouseEnter={handleOnMouseEnter}
    >
      <div className="block items-center gap-[5%] w-full md:flex">
        <div className="flex">
          <div className="flex gap-2 pr-[5vw] mb-10 md:mb-0">
            <h3>EXP</h3>
            <h3>{`00${exp}`}</h3>
          </div>
          <div className="w-[65px]">{date}</div>
        </div>
        <div className="w-auto h-auto text-lg font-semibold lg:text-xl lg:w-[25%]">
          {title}
        </div>
        <ul className="hidden gap-[10px] lg:flex">
          {techs.map((tech, i) => (
            <li
              key={i}
              className={`relative ${i !== 0 ? `pl-[15px] ${customDot}` : ""}`}
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`hidden ${center} w-12 h-12 bg-black rounded-full lg:w-14 lg:h-14 md:flex`}
      >
        {hoveredItem === exp ? (
          <GoArrowUpRight className="w-6 h-6 text-white" />
        ) : (
          <div className="w-4 h-4 bg-white rounded-full" />
        )}
      </div>
    </div>
  );
}

export default ProjectList;
