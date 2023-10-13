import "./css/animation.css";
import { BsArrowRightShort } from "react-icons/bs";
import { GoArrowUpRight } from "react-icons/go";

function MainBanner() {
  return (
    <section className="flex flex-col items-center">
      <div className="relative">
        <span className="absolute top-5 -left-40 text-xl revealTextAfter1250ms">
          (I Am)
        </span>
        <div className="text-9xl slideToLeftAfter1000ms">Front</div>
      </div>
      <div className="relative flex text-xl">
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
      <div className="relative flex">
        <div className="text-9xl slideToLeftAfter1500ms">Developer</div>
        <a
          href="https://whispering-keyboard-d37.notion.site/34e7062a268b40b49296376979618c6b?pvs=4"
          rel="noopener noreferrer"
          target="_blank"
          className="absolute top-24 -right-12 flex items-center revealTextAfter1750ms"
        >
          (<GoArrowUpRight />
          Resume)
        </a>
      </div>
    </section>
  );
}

export default MainBanner;
