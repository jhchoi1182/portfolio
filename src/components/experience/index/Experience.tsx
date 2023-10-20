import { useRef } from "react";
import useScrollX from "../../../hooks/useScrollX";
import CICD from "../elements/CICD";
import PerformanceOptimizer from "../elements/PerformanceOptimizer";
import UIDesign from "../elements/UIDesign";
import UserFeedback from "../elements/UserFeedback";
import "../css/animation.css";

function Experience() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { translatePercentage } = useScrollX(containerRef);

  return (
    <div ref={containerRef} className="h-[400vh]">
      <div className="relative h-[100%]">
        <div className="sticky top-0 flex overflow-x-auto h-screen scroll-hidden">
          <h1 className="absolute top-[15%] left-1/2 -translate-x-1/2 text-4xl font-bold z-10">
            Experience
          </h1>
          <div
            className="flex h-full pt-[5%]"
            style={{
              transform: `translateX(-${translatePercentage}%)`,
            }}
          >
            <PerformanceOptimizer />
            <UIDesign />
            <CICD />
            <UserFeedback />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
