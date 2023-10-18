import SkillLayout from "./SkillLayout";

const cloudAndDeployment = {
  title: `Cloud & Deployment`,
  li: [`AWS EC2, Amplify`, `Vercel`, `Github.io`],
};

function CloudAndDeployment() {
  return (
    <SkillLayout title={cloudAndDeployment.title} li={cloudAndDeployment.li} />
  );
}

export default CloudAndDeployment;
