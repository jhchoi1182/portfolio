import React from "react";
import { useRecoilState } from "recoil";
import { toggleProjectViewAtom } from "../../../libs/atoms";
import { REACTIVE_COLOR } from "../../../styles/colors";

interface Props {
  setToggleAnimation: React.Dispatch<React.SetStateAction<boolean>>;
}

const GRID = "GRID";
const LIST = "LIST";
const styles = {
  selectedText: REACTIVE_COLOR.inverseText,
  text: REACTIVE_COLOR.primaryText,
};

function ProjectViewToggle({ setToggleAnimation }: Props) {
  const [toggleProjectView, setToggleProjectView] = useRecoilState(
    toggleProjectViewAtom,
  );

  const toggle = () => {
    setToggleAnimation((prev) => !prev);
    setTimeout(() => {
      setToggleProjectView((prev) => (prev === GRID ? LIST : GRID));
    }, 500);
    setTimeout(() => {
      setToggleAnimation((prev) => !prev);
    }, 1000);
  };

  return (
    <div className="fixed top-[13%] right-[5%] z-40 lg:right-[10%]">
      <button
        className={`relative flex justify-between items-center w-[105px] h-8 border ${REACTIVE_COLOR.primaryBorder} px-2 font-bold rounded-full`}
        onClick={toggle}
      >
        <span
          className={`z-10  ${
            toggleProjectView === GRID ? styles.selectedText : styles.text
          }`}
        >
          {GRID}
        </span>
        <span
          className={`z-10  ${
            toggleProjectView === LIST ? styles.selectedText : styles.text
          }`}
        >
          {LIST}
        </span>
        <div
          className={`absolute top-0 ${
            toggleProjectView === GRID ? "left-0" : "left-[calc(100%-53px)]"
          } transition-left duration-300 ease-in-out w-[53px] h-full ${
            REACTIVE_COLOR.blackBg
          } rounded-full`}
        />
      </button>
    </div>
  );
}

export default ProjectViewToggle;
