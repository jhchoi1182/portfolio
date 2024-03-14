import SkillLayout from "./SkillLayout";

interface Props {
  showElement: boolean;
  divRef: React.MutableRefObject<HTMLDivElement | null>;
}

const data = {
  title: `DBMS`,
  li: [`Mongo DB`, `MySQL`],
};

function DBMS({ showElement, divRef }: Props) {
  return (
    <SkillLayout
      title={data.title}
      li={data.li}
      showElement={showElement}
      divRef={divRef}
    />
  );
}

export default DBMS;
