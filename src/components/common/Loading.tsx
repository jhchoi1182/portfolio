import useBlockScroll from "../../hooks/useBlockScroll";
import "./css/animation.css";

function Loading() {
  useBlockScroll();

  return (
    <div className="absolute top-0 -left-1/4 z-50 flex flex-col justify-between w-[150%] h-[200vh] bg-white loading">
      <div className="w-full">
        <hr className="h-[80px] bg-[#2d3436] topLineScalingAfter1500ms" />
        <hr className="h-[80px] bg-[#b2bec3] bottomLineScalingAfter1500ms" />
      </div>
      <div className="w-full">
        <hr className="h-[80px] bg-[#b2bec3] topLineScaling" />
        <hr className="h-[80px] bg-[#2d3436] bottomLineScaling" />
      </div>
    </div>
  );
}

export default Loading;
