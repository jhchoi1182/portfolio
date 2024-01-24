import "../css/animation.css";
import { BsArrowRightShort } from "react-icons/bs";

function Stack() {
  return (
    <div className="relative flex z-20">
      <div className="text-4xl animate-slideToLeftAfter2250ms lg:text-9xl md:text-8xl sm:text-6xl">
        -Stack
      </div>
      <div className="absolute top-0 -right-[100px] flex flex-col justify-center text-xs lg:text-xl lg:top-7 lg:-right-[196px] md:text-lg md:top-3 md:-right-40 sm:text-sm sm:top-1">
        <div className="flex items-center animate-revealTextAfter2500ms">
          <BsArrowRightShort />
          <span>Optimized UX/UI</span>
        </div>
        <div className="flex items-center animate-revealTextAfter2600ms">
          <BsArrowRightShort />
          <span>Performance Tuning</span>
        </div>
        <div className="flex items-center animate-revealTextAfter2700ms">
          <BsArrowRightShort />
          <span>E2E Project Management</span>
        </div>
      </div>
    </div>
  );
}

export default Stack;
