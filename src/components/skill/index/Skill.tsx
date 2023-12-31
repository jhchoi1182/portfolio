import { useState, useRef } from "react";
import useFadeInOnScroll from "../../../hooks/useFadeInOnScroll";
import BackEnd from "../elements/BackEnd";
import CloudAndDeployment from "../elements/CloudAndDeployment";
import Collaboration from "../elements/Collaboration";
import Curve from "../elements/Curve";
import Data from "../elements/Data";
import FrontEnd from "../elements/FrontEnd";
import TestingLibraries from "../elements/TestingLibraries";

function Skill() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [showElements, setShowElements] = useState(Array(7).fill(null));
  const refs = [
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
  ];

  useFadeInOnScroll(showElements, setShowElements, refs);

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col items-center w-full min-h-screen font-notoSans z-20"
    >
      <h1
        ref={refs[0]}
        className={`text-2xl font-semibold mb-16 z-10 animate-fadeInUpAfter250ms md:text-4xl sm:text-3xl ${
          showElements[0] ? "animate-show" : ""
        }`}
      >
        Skills
      </h1>
      <div className="flex flex-col gap-12 w-full items-center z-10">
        <FrontEnd showElement={showElements[1]} divRef={refs[1]} />
        <BackEnd showElement={showElements[2]} divRef={refs[2]} />
        <Data showElement={showElements[3]} divRef={refs[3]} />
        <CloudAndDeployment showElement={showElements[4]} divRef={refs[4]} />
        <TestingLibraries showElement={showElements[5]} divRef={refs[5]} />
        <Collaboration showElement={showElements[6]} divRef={refs[6]} />
      </div>
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full overflow-hidden z-0 lg:top-0 lg:left-0 lg:translate-y-0">
        <Curve containerRef={containerRef} />
      </div>
    </div>
  );
}

export default Skill;
