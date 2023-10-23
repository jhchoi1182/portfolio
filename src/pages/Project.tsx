import { useEffect } from "react";
import ProjectList from "../components/project/index/ProjectList";

function Project() {
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
      <ProjectList />
    </div>
  );
}

export default Project;
