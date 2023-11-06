import useBlockScroll from "../../hooks/useBlockScroll";
import "./css/animation.css";

function Loading() {
  useBlockScroll();

  return (
    <div className="fixed top-0 -left-1/4 z-50 flex flex-col justify-between w-[150%] h-[200vh] bg-white animate-loading">
      <div className="w-full">
        <hr className="h-[80px] bg-[#2d3436] animate-topLineScalingAfter1500ms" />
        <hr className="h-[80px] bg-[#b2bec3] animate-bottomLineScalingAfter1500ms" />
      </div>
      <div className="w-full">
        <hr className="h-[80px] bg-[#b2bec3] animate-topLineScaling" />
        <hr className="h-[80px] bg-[#2d3436] animate-bottomLineScaling" />
      </div>
    </div>
  );
}

export default Loading;
