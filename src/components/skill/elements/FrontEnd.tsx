import SkillLayout from "./SkillLayout";

const frontEnd = {
  title: `Front-End`,
  li: [
    `HTML5, CSS3, Javascript (ES6), Typescript`,
    `React.js, Next.js`,
    `Redux, React-query, Recoil, Styled-Components, Tailwind CSS`,
  ],
};

function FrontEnd() {
  return <SkillLayout title={frontEnd.title} li={frontEnd.li} />;
}

export default FrontEnd;
