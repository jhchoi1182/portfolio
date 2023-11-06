import "../css/animation.css";
import { GoArrowUpRight } from "react-icons/go";

function Developer() {
  return (
    <div className="relative flex z-20">
      <div className="text-4xl animate-slideToLeftAfter3000ms lg:text-9xl md:text-8xl sm:text-6xl">
        Developer
      </div>
      <a
        href="https://www.canva.com/design/DAFyXmbskLU/_TTl-7q3qWzsXvieWG_siA/edit?utm_content=DAFyXmbskLU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
        rel="noopener noreferrer"
        target="_blank"
        className="absolute top-[25px] -right-10 flex text-xs items-center animate-revealTextAfter3250ms lg:top-24 md:top-[70px] md:-right-12 md:text-base sm:text-sm sm:top-[40px]"
      >
        (<GoArrowUpRight />
        Resume)
      </a>
    </div>
  );
}

export default Developer;
