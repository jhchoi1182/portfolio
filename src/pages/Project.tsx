import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import ProjectViewToggle from "../components/project/elements/ProjectViewToggle";
import ProjectGrid from "../components/project/index/ProjectGrid";
import ProjectLists from "../components/project/index/ProjectLists";
import { toggleProjectViewAtom as toggleProjectViewAtom } from "../libs/atoms";

function Project() {
  const toggleProjectView = useRecoilValue(toggleProjectViewAtom);
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
    <div className="w-full px-[5%] pt-[11%]">
      <ProjectViewToggle setToggleAnimation={setToggleAnimation} />
      <div className={toggleAnimation ? "relative z-30 animate-fadeOutIn" : ""}>
        {toggleProjectView === "GRID" ? (
          <ProjectGrid />
        ) : (
          <ProjectLists toggleAnimation={toggleAnimation} />
        )}
      </div>
    </div>
  );
}

export default Project;
