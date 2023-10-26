import "../css/animation.css";
import { GoArrowUpRight } from "react-icons/go";

function Developer() {
  return (
    <div className="relative flex z-20">
      <div className="text-9xl slideToLeftAfter3000ms">Developer</div>
      <a
        href="https://whispering-keyboard-d37.notion.site/34e7062a268b40b49296376979618c6b?pvs=4"
        rel="noopener noreferrer"
        target="_blank"
        className="absolute top-24 -right-12 flex items-center revealTextAfter3250ms"
      >
        (<GoArrowUpRight />
        Resume)
      </a>
    </div>
  );
}

export default Developer;
