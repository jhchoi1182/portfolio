import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { center } from "../../../styles/classNames";

interface Props {
  data: projectMetaData;
  idx: number;
  title: string;
  hoveredButton: string | null;
  setHoveredButton: React.Dispatch<React.SetStateAction<string | null>>;
}

function ViewButton({
  data,
  idx,
  title,
  hoveredButton,
  setHoveredButton,
}: Props) {
  return (
    <a
      href={data.service ? data.service[idx] : "#"}
      rel="noreferrer"
      target="_blank"
    >
      <button
        className={`${center} gap-5 w-32 h-11 bg-inverse dark:bg-primary rounded-full`}
        onMouseEnter={() => setHoveredButton(title)}
        onMouseLeave={() => setHoveredButton(null)}
      >
        {hoveredButton === title ? (
          <GoArrowUpRight className="w-5 h-5 -ml-1 -mr-1 text-white dark:text-black" />
        ) : (
          <div className="w-3 h-3 bg-white dark:bg-black rounded-full" />
        )}
        <span className="text-xl font-semibold text-white dark:text-black">
          View
        </span>
      </button>
    </a>
  );
}

export default ViewButton;
