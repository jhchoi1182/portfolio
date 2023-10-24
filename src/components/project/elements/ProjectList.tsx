import { GoArrowUpRight } from "react-icons/go";
import { center, customDot } from "../../../styles/classNames";

interface Props {
  data: projectCard;
  hoveredItem: string | null;
  setHoveredItem: React.Dispatch<React.SetStateAction<string | null>>;
}

function ProjectList({
  data: { exp, date, title, techs },
  hoveredItem,
  setHoveredItem,
}: Props) {
  return (
    <div
      className={`flex justify-between items-center py-12 text-lg font-notoSans cursor-pointer ${
        hoveredItem === null
          ? "opacity-100"
          : hoveredItem === exp
          ? "opacity-100"
          : "opacity-30"
      }`}
      onMouseEnter={() => setHoveredItem(exp)}
    >
      <div className="flex gap-[5%] w-full">
        <div className="flex gap-2">
          <h3>EXP</h3>
          <h3>{`00${exp}`}</h3>
        </div>
        <div className="w-[100px]">{date}</div>
        <div className="w-[400px] text-xl font-semibold">{title}</div>
        <ul className="flex gap-[10px]">
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
      <div className={`${center} w-14 h-14 bg-black rounded-full`}>
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
