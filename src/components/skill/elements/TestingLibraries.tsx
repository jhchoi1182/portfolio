import SkillLayout from "./SkillLayout";

interface Props {
  showElement: boolean;
  divRef: React.MutableRefObject<HTMLDivElement | null>;
}

const testingLibraries = {
  title: `Testing Libraries`,
  li: [`React Testing Library, Jest`],
};

function TestingLibraries({ showElement, divRef }: Props) {
  return (
    <SkillLayout
      title={testingLibraries.title}
      li={testingLibraries.li}
      showElement={showElement}
      divRef={divRef}
    />
  );
}

export default TestingLibraries;
