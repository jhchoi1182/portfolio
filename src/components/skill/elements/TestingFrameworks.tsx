import SkillLayout from "./SkillLayout";

interface Props {
  showElement: boolean;
  divRef: React.MutableRefObject<HTMLDivElement | null>;
}

const testingFrameworks = {
  title: `Testing Frameworks`,
  li: [`Jest, Junit5`],
};

function TestingFrameworks({ showElement, divRef }: Props) {
  return (
    <SkillLayout
      title={testingFrameworks.title}
      li={testingFrameworks.li}
      showElement={showElement}
      divRef={divRef}
    />
  );
}

export default TestingFrameworks;
