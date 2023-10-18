import SkillLayout from "./SkillLayout";

const collaboration = {
  title: `Collaboration`,
  li: [`Slack`, `Notion`, `Figma`],
};

function Collaboration() {
  return <SkillLayout title={collaboration.title} li={collaboration.li} />;
}

export default Collaboration;
