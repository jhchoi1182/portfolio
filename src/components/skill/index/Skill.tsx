import { useRef } from "react";
import CloudAndDeployment from "../elements/CloudAnd\u2028Deployment";
import Collaboration from "../elements/Collaboration";
import Curve from "../elements/Curve";
import Data from "../elements/Data";
import FrontEnd from "../elements/FrontEnd";
import TestingLibraries from "../elements/TestingLibraries";

function Skill() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  return (
    <div
      ref={containerRef}
      className="relative flex flex-col items-center w-full h-screen font-inter"
    >
      <h1 className="text-4xl font-semibold mb-16 z-10">Skills</h1>
      <div className="flex flex-col gap-12 z-10">
        <FrontEnd />
        <Data />
        <CloudAndDeployment />
        <TestingLibraries />
        <Collaboration />
      </div>
      <div className="absolute inset-0 w-full overflow-hidden z-0">
        <Curve containerRef={containerRef} />
      </div>
    </div>
  );
}

export default Skill;
