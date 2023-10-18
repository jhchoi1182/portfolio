import SkillLayout from "./SkillLayout";

const testingLibraries = {
  title: `Testing Libraries`,
  li: [`React Testing Library, Jest`],
};

function TestingLibraries() {
  return (
    <SkillLayout title={testingLibraries.title} li={testingLibraries.li} />
  );
}

export default TestingLibraries;
