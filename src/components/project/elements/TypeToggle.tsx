import React from "react";
import { useRecoilState } from "recoil";
import { toggleProjectTypeAtom } from "../../../libs/atoms";

interface Props {
  setToggleAnimation: React.Dispatch<React.SetStateAction<boolean>>;
}

const styles = {
  selectedText: `text-white dark:text-black`,
  text: `text-black dark:text-white`,
};

function TypeToggle({ setToggleAnimation }: Props) {
  const [toggleProjectType, setToggleProjectType] = useRecoilState(
    toggleProjectTypeAtom,
  );
  const GRID = "GRID";
  const LIST = "LIST";

  const toggle = () => {
    setToggleAnimation((prev) => !prev);
    setTimeout(() => {
      setToggleProjectType((prev) => (prev === GRID ? LIST : GRID));
    }, 500);
    setTimeout(() => {
      setToggleAnimation((prev) => !prev);
    }, 1000);
  };

  return (
    <div className="fixed top-[13%] right-[10%] z-40">
      <button
        className={`relative flex justify-between items-center w-[100px] h-8 border border-black dark:border-white px-2 font-bold rounded-full`}
        onClick={toggle}
      >
        <span
          className={`z-10  ${
            toggleProjectType === GRID ? styles.selectedText : styles.text
          }`}
        >
          {GRID}
        </span>
        <span
          className={`z-10  ${
            toggleProjectType === LIST ? styles.selectedText : styles.text
          }`}
        >
          {LIST}
        </span>
        <div
          className={`absolute top-0 ${
            toggleProjectType === GRID ? "left-0" : "left-[calc(100%-52px)]"
          } transition-left duration-300 ease-in-out w-[52px] h-full bg-black dark:bg-white rounded-full`}
        />
      </button>
    </div>
  );
}

export default TypeToggle;
