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
  const [elementsVisible, setElementsVisible] = useState(Array(7).fill(null));
  const refs = [
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
  ];

  useFadeInOnScroll(elementsVisible, setElementsVisible, refs);

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col items-center w-full min-h-screen font-notoSans z-20"
    >
      <h1
        ref={refs[0]}
        className={`text-2xl font-semibold mb-16 z-10 animate-fadeInUpAfter250ms md:text-4xl sm:text-3xl ${
          elementsVisible[0] ? "animate-show" : ""
        }`}
      >
        Skills
      </h1>
      <div className="flex flex-col gap-12 w-full items-center z-10">
        <FrontEnd showElement={elementsVisible[1]} divRef={refs[1]} />
        <BackEnd showElement={elementsVisible[2]} divRef={refs[2]} />
        <Data showElement={elementsVisible[3]} divRef={refs[3]} />
        <CloudAndDeployment showElement={elementsVisible[4]} divRef={refs[4]} />
        <TestingLibraries showElement={elementsVisible[5]} divRef={refs[5]} />
        <Collaboration showElement={elementsVisible[6]} divRef={refs[6]} />
      </div>
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full overflow-hidden z-0 lg:top-0 lg:left-0 lg:translate-y-0">
        <Curve containerRef={containerRef} />
      </div>
    </div>
  );
}

export default Skill;
