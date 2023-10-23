import { useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import ExperienceLayout from "./ExperienceLayout";
import profiler from "../../../assets/images/about/profiler.webp";
import profiler2 from "../../../assets/images/about/profiler2.webp";
import webVitals from "../../../assets/images/about/webVitals.webp";
import highlightLongDark from "../../../assets/images/highlights/highlight_long_dark.webp";
import highlightLongLight from "../../../assets/images/highlights/highlight_long_light.webp";
import highlightShortDark from "../../../assets/images/highlights/highlight_short_dark.webp";
import highlightShortLight from "../../../assets/images/highlights/highlight_short_light.webp";
import useScrollFadeIn from "../../../hooks/useScrollFadeIn";
import { darkModeAtom } from "../../../libs/atoms";

function PerformanceOptimizer() {
  const isDark = useRecoilValue(darkModeAtom);
  const [showElements, setShowElements] = useState(Array(3).fill(null));
  const refs = [
    useRef<HTMLImageElement | null>(null),
    useRef<HTMLImageElement | null>(null),
    useRef<HTMLImageElement | null>(null),
  ];

  useScrollFadeIn(showElements, setShowElements, refs, true);

  return (
    <ExperienceLayout
      title="성능 최적화"
      img={
        <div className="relative w-[700px] h-[600px]">
          <img
            className="w-[500px] absolute top-0 left-0 shadow-xl z-10"
            src={profiler2}
            alt="profiler"
          />
          <img
            className="w-[500px] absolute top-1/2 right-0 -translate-y-1/2 shadow-xl z-20"
            src={profiler}
            alt="profiler"
          />
          <img
            className="w-[500px] absolute bottom-0 left-1/2 -translate-x-1/2 shadow-xl"
            src={webVitals}
            alt="webVitals"
          />
        </div>
      }
      descriptions={
        <>
          <li>
            렌더링 속도
            <span className="relative">
              <span className="relative z-10"> 53% 개선</span>
              <img
                ref={refs[0]}
                className={`absolute -top-2 left-0 z-0 hiddenInitially ${
                  showElements[0] ? "revealBrushAfter250ms" : ""
                }`}
                src={isDark ? highlightShortDark : highlightShortLight}
                alt="highlightShort"
              />
            </span>
          </li>
          <li>
            초기 렌더링 시간
            <span className="relative">
              <span className="relative z-10"> 80.61% 단축</span>
              <img
                ref={refs[1]}
                className={`absolute -top-4 left-0 z-0 hiddenInitially ${
                  showElements[1] ? "revealBrushAfter450ms" : ""
                }`}
                src={isDark ? highlightShortDark : highlightShortLight}
                alt="highlightShort"
              />
            </span>
          </li>
          <li>
            <span className="relative">
              <span className="relative z-10">Web Vitals 성능 향상</span>
              <img
                ref={refs[2]}
                className={`absolute -top-0 left-0 z-0 hiddenInitially ${
                  showElements[2] ? "revealBrushAfter650ms" : ""
                }`}
                src={isDark ? highlightLongDark : highlightLongLight}
                alt="highlightLong"
              />
            </span>
          </li>
        </>
      }
    />
  );
}

export default PerformanceOptimizer;
