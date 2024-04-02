import { useRef, useState } from "react";
import ExperienceLayout from "./atoms/ExperienceLayout";
import ExperienceText from "./atoms/ExperienceText";
import OptimisticUpdates from "../../../assets/images/about/OptimisticUpdates.png";
import profiler from "../../../assets/images/about/profiler.webp";
import webVitals from "../../../assets/images/about/webVitals.webp";
import useFadeInOnScroll from "../../../hooks/useFadeInOnScroll";

const textInfos: experienceText[] = [
  {
    text: "**Web Vitals 성능 향상**",
    highlightIndex: 3,
    topLeft: "-top-0 left-0",
    highlightLength: "long",
  },
  {
    text: "초기 렌더링 시간 **80.61% 단축**",
    highlightIndex: 1,
    topLeft: "-top-4 -left-1",
    highlightLength: "short",
  },
  {
    text: "리렌더링 속도 **69.64% 개선**",
    highlightIndex: 2,
    topLeft: "-top-2 -left-1",
    highlightLength: "short",
  },
  {
    text: "SQL 쿼리 요청 횟수 최적화",
  },
];

function PerformanceOptimizer() {
  const [elementsVisible, setElementsVisible] = useState(Array(3).fill(null));
  const refs = [useRef<HTMLImageElement | null>(null), useRef<HTMLImageElement | null>(null), useRef<HTMLImageElement | null>(null)];

  useFadeInOnScroll(elementsVisible, setElementsVisible, refs, true);

  return (
    <ExperienceLayout
      title="성능 최적화"
      img={
        <div className="relative w-[700px] h-[600px]">
          <img className="w-[400px] absolute top-0 left-0 shadow-xl z-10" src={webVitals} alt="webVitals" />
          <img className="w-[500px] absolute top-[37%] right-0 -translate-y-1/2 shadow-xl z-20" src={profiler} alt="profiler" />
          <img className="w-[500px] absolute bottom-0 left-1/2 -translate-x-1/2 shadow-xl" src={OptimisticUpdates} alt="OptimisticUpdates" />
        </div>
      }
      descriptions={<ExperienceText textInfos={textInfos} refs={refs} elementsVisible={elementsVisible} />}
    />
  );
}

export default PerformanceOptimizer;
