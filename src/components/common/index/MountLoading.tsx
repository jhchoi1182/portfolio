import { useEffect } from "react";
import "../css/animation.css";

function MountLoading() {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="absolute top-0 -left-1/4 z-50 w-[150%] h-[200vh] bg-white overflow-hidden mountLoading">
      <div className="flex flex-col justify-start w-full h-full overflow-hidden">
        <hr className="h-[80px] bg-[#2d3436] topLineScaling" />
        <hr className="h-[80px] bg-[#b2bec3] bottomLineScaling" />
      </div>
    </div>
  );
}

export default MountLoading;
