import SkillLayout from "./SkillLayout";

interface Props {
  showElement: boolean;
  divRef: React.MutableRefObject<HTMLDivElement | null>;
}

const frontEnd = {
  title: `Front-End`,
  li: [
    `HTML5, CSS3, Javascript (ES6), Typescript, JQuery, Ajax`,
    `React.js, Next.js`,
    `React Native (EXPO)`,
    `Redux, React-query, Recoil, Styled-Components, Tailwind CSS`,
  ],
};

function FrontEnd({ showElement, divRef }: Props) {
  return (
    <SkillLayout
      title={frontEnd.title}
      li={frontEnd.li}
      showElement={showElement}
      divRef={divRef}
    />
  );
}

export default FrontEnd;
