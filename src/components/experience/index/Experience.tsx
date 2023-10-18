import { useRef } from "react";
import useScrollX from "../../../hooks/useScrollX";

function Experience() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { translatePercentage } = useScrollX(containerRef);

  return (
    <div ref={containerRef} className="h-[400vh]">
      <div className="relative h-[100%]">
        <div className="sticky top-0 flex overflow-x-auto h-screen scroll-hidden">
          <div
            className="flex h-full"
            style={{
              transform: `translateX(-${translatePercentage}%)`,
            }}
          >
            <div className="w-screen h-full bg-slate-600">dd</div>
            <div className="w-screen h-full bg-red-500">dd</div>
            <div className="w-screen h-full bg-blue-500">dd</div>
            <div className="w-screen h-full bg-green-500">dd</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
