import { useEffect, useState } from "react";
import TypeToggle from "../components/project/elements/TypeToggle";
import ProjectGrid from "../components/project/index/ProjectGrid";
import ProjectList from "../components/project/index/ProjectList";
import "../components/project/css/animation.css";

function Project() {
  const [toggleType, setToggleType] = useState<"GRID" | "LIST">("GRID");
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
  console.log(toggleAnimation);

  return (
    <div className="w-full px-[5%] pt-[5%]">
      <TypeToggle
        toggleType={toggleType}
        setToggleType={setToggleType}
        setToggleAnimation={setToggleAnimation}
      />
      <div className={toggleAnimation ? "relative z-30 fadeOutIn" : ""}>
        {toggleType === "GRID" ? <ProjectGrid /> : <ProjectList />}
      </div>
    </div>
  );
}

export default Project;
