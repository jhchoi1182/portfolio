import CloudAndDeployment from "../elements/CloudAnd\u2028Deployment";
import Collaboration from "../elements/Collaboration";
import Data from "../elements/Data";
import FrontEnd from "../elements/FrontEnd";
import TestingLibraries from "../elements/TestingLibraries";

function Skill() {
  return (
    <div className="relative flex flex-col items-center w-full h-screen font-inter">
      <h1 className="text-4xl font-semibold mb-16 z-10">Skills</h1>
      <div className="flex flex-col gap-12 z-10">
        <FrontEnd />
        <Data />
        <CloudAndDeployment />
        <TestingLibraries />
        <Collaboration />
      </div>
    </div>
  );
}

export default Skill;
