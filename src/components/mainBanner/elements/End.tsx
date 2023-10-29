import "../css/animation.css";
import { BsArrowRightShort } from "react-icons/bs";

function End() {
  return (
    <div className="relative flex z-20 ">
      <div className="text-6xl slideToLeftAfter2750ms lg:text-9xl md:text-8xl">
        -End
      </div>
      <div className="absolute top-1 -right-20 flex flex-col justify-center text-sm lg:text-xl lg:top-7 lg:-right-40 md:text-lg md:top-3 md:-right-32">
        <div className="flex items-center revealTextAfter3000ms">
          <BsArrowRightShort />
          <span>Optimized UX/UI</span>
        </div>
        <div className="flex items-center revealTextAfter3100ms">
          <BsArrowRightShort />
          <span>Responsive Design</span>
        </div>
        <div className="flex items-center revealTextAfter3200ms">
          <BsArrowRightShort />
          <span>Performance Tuning</span>
        </div>
      </div>
    </div>
  );
}

export default End;
