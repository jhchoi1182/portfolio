import SkillLayout from "./SkillLayout";

interface Props {
  showElement: boolean;
  divRef: React.MutableRefObject<HTMLDivElement | null>;
}

const backEnd = {
  title: `Back-End`,
  li: [
    `Python, Java`,
    `Spring Boot, Spring Data JPA, Spring Security, JSP`,
    `Flask`,
  ],
};

function BackEnd({ showElement, divRef }: Props) {
  return (
    <SkillLayout
      title={backEnd.title}
      li={backEnd.li}
      showElement={showElement}
      divRef={divRef}
    />
  );
}

export default BackEnd;
