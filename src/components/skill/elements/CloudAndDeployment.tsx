import SkillLayout from "./SkillLayout";

interface Props {
  showElement: boolean;
  divRef: React.MutableRefObject<HTMLDivElement | null>;
}

const cloudAndDeployment = {
  title: `Cloud & Deployment`,
  li: [`AWS EC2, Amplify`, `Vercel`, `GitHub Pages`],
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
