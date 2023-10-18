import SkillLayout from "./SkillLayout";

const data = {
  title: `Data`,
  li: [`Mongo DB`, `Sanity`],
};

function Data() {
  return <SkillLayout title={data.title} li={data.li} />;
}

export default Data;
