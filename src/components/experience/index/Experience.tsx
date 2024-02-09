import { useRef } from "react";
import useScrollX from "../../../hooks/useScrollX";
import DevOps from "../elements/DevOps";
import PerformanceOptimizer from "../elements/PerformanceOptimizer";
import UIDesign from "../elements/UIDesign";
import UserFeedback from "../elements/UserFeedback";
import "../css/animation.css";

function Experience() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const scrollDivRef = useRef<HTMLDivElement | null>(null);

  useScrollX(containerRef, scrollDivRef);

  return (
    <div ref={containerRef} className="h-[400vh] mt-[100px]">
      <div className="relative h-[100%] z-20">
        <div className="sticky top-0 flex overflow-x-auto h-screen scroll-hidden">
          <h1 className="absolute top-[15%] left-1/2 -translate-x-1/2 text-2xl font-bold z-10 md:text-4xl sm:text-3xl">
            Experience
          </h1>
          <div ref={scrollDivRef} className="flex h-full pt-[95px]">
            <PerformanceOptimizer />
            <DevOps />
            <UIDesign />
            <UserFeedback />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
