import "../css/animation.css";
import { BsArrowRightShort } from "react-icons/bs";

function End() {
  return (
    <div className="relative flex text-xl z-20">
      <div className="text-9xl slideToLeftAfter2750ms">-End</div>
      <div className="absolute top-7 -right-40 flex flex-col justify-center">
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
