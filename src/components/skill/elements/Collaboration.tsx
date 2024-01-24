import SkillLayout from "./SkillLayout";

interface Props {
  showElement: boolean;
  divRef: React.MutableRefObject<HTMLDivElement | null>;
}

const collaboration = {
  title: `Collaboration`,
  li: [`Git/Github, Slack, Notion, Figma`, `Swagger`],
};

function Collaboration({ showElement, divRef }: Props) {
  return (
    <SkillLayout
      title={collaboration.title}
      li={collaboration.li}
      showElement={showElement}
      divRef={divRef}
    />
  );
}

export default Collaboration;
