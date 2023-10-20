import "../css/animation.css";
import { BsArrowRightShort } from "react-icons/bs";

function End() {
  return (
    <div className="relative flex text-xl z-20">
      <div className="text-9xl slideToLeftAfter1250ms">-End</div>
      <div className="absolute top-7 -right-40 flex flex-col justify-center">
        <div className="flex items-center revealTextAfter1500ms">
          <BsArrowRightShort />
          <span>Optimized UX/UI</span>
        </div>
        <div className="flex items-center revealTextAfter1600ms">
          <BsArrowRightShort />
          <span>Responsive Design</span>
        </div>
        <div className="flex items-center revealTextAfter1700ms">
          <BsArrowRightShort />
          <span>Performance Tuning</span>
        </div>
      </div>
    </div>
  );
}

export default End;
