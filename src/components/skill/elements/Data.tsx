import SkillLayout from "./SkillLayout";

interface Props {
  showElement: boolean;
  divRef: React.MutableRefObject<HTMLDivElement | null>;
}

const data = {
  title: `Data`,
  li: [`Mongo DB`, `MySQL`, `Amazon S3`],
};

function Data({ showElement, divRef }: Props) {
  return (
    <SkillLayout
      title={data.title}
      li={data.li}
      showElement={showElement}
      divRef={divRef}
    />
  );
}

export default Data;
