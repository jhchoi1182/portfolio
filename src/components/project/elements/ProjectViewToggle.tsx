import React from "react";
import { useRecoilState } from "recoil";
import { toggleProjectViewAtom } from "../../../libs/atoms";

interface Props {
  setToggleAnimation: React.Dispatch<React.SetStateAction<boolean>>;
}

const styles = {
  selectedText: `text-white dark:text-black`,
  text: `text-black dark:text-white`,
};

function ProjectViewToggle({ setToggleAnimation }: Props) {
  const [toggleProjectView, setToggleProjectView] = useRecoilState(
    toggleProjectViewAtom,
  );
  const GRID = "GRID";
  const LIST = "LIST";

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
        className={`relative flex justify-between items-center w-[105px] h-8 border border-black dark:border-white px-2 font-bold rounded-full`}
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
          } transition-left duration-300 ease-in-out w-[53px] h-full bg-black dark:bg-white rounded-full`}
        />
      </button>
    </div>
  );
}

export default ProjectViewToggle;
