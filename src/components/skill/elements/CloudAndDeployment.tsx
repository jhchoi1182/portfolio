import SkillLayout from "./SkillLayout";

interface Props {
  showElement: boolean;
  divRef: React.MutableRefObject<HTMLDivElement | null>;
}

const cloudAndDeployment = {
  title: `Cloud & Deployment`,
  li: [`AWS EC2`, `Vercel, Amplify, GitHub Pages`, `Docker/Docker Compose, Github Actions`],
};

function CloudAndDeployment({ showElement, divRef }: Props) {
  return (
    <SkillLayout
      title={cloudAndDeployment.title}
      li={cloudAndDeployment.li}
      showElement={showElement}
      divRef={divRef}
    />
  );
}

export default CloudAndDeployment;
