import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import TypeToggle from "../components/project/elements/TypeToggle";
import ProjectGrid from "../components/project/index/ProjectGrid";
import ProjectLists from "../components/project/index/ProjectLists";
import "../components/project/css/animation.css";
import { toggleProjectTypeAtom } from "../libs/atoms";

function Project() {
  const toggleProjectType = useRecoilValue(toggleProjectTypeAtom);
  const [toggleAnimation, setToggleAnimation] = useState(false);

  useEffect(() => {
    const handleMouseDown = (event: MouseEvent) => {
      if (event.button === 1) {
        event.preventDefault();
      }
    };

    document.addEventListener("mousedown", handleMouseDown);
    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

  return (
    <div className="w-full px-[5%] pt-[5%]">
      <TypeToggle setToggleAnimation={setToggleAnimation} />
      <div className={toggleAnimation ? "relative z-30 fadeOutIn" : ""}>
        {toggleProjectType === "GRID" ? <ProjectGrid /> : <ProjectLists />}
      </div>
    </div>
  );
}

export default Project;
