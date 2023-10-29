import "../css/animation.css";
import { GoArrowUpRight } from "react-icons/go";

function Developer() {
  return (
    <div className="relative flex z-20">
      <div className="text-6xl slideToLeftAfter3000ms lg:text-9xl md:text-8xl">
        Developer
      </div>
      <a
        href="https://whispering-keyboard-d37.notion.site/34e7062a268b40b49296376979618c6b?pvs=4"
        rel="noopener noreferrer"
        target="_blank"
        className="absolute top-[40px] -right-10 flex text-sm items-center revealTextAfter3250ms lg:top-24 md:top-[70px] md:-right-12 md:text-base"
      >
        (<GoArrowUpRight />
        Resume)
      </a>
    </div>
  );
}

export default Developer;
