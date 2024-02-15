import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { center } from "../../../styles/classNames";
import { REACTIVE_COLOR } from "../../../styles/colors";

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
        className={`${center} gap-5 w-32 h-11 ${REACTIVE_COLOR.inverseBg} rounded-full`}
        onMouseEnter={() => setHoveredButton(title)}
        onMouseLeave={() => setHoveredButton(null)}
      >
        {hoveredButton === title ? (
          <GoArrowUpRight
            className={`w-5 h-5 -ml-1 -mr-1 ${REACTIVE_COLOR.inverseText}`}
          />
        ) : (
          <div className={`w-3 h-3 ${REACTIVE_COLOR.whiteBg} rounded-full`} />
        )}
        <span className={`text-xl font-semibold ${REACTIVE_COLOR.inverseText}`}>
          View
        </span>
      </button>
    </a>
  );
}

export default ViewButton;
