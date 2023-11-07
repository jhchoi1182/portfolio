import { useRef, useState } from "react";
import ExperienceLayout from "./atoms/ExperienceLayout";
import ExperienceText from "./atoms/ExperienceText";
import userTest from "../../../assets/images/about/userTest.webp";
import useFadeInOnScroll from "../../../hooks/useFadeInOnScroll";
import { center } from "../../../styles/classNames";

const textInfos: experienceText[] = [
  {
    text: "**2주간의 45개 피드백을 통한 UI/UX 개선**",
    highlightIndex: 1,
    topLeft: "-top-4 left-0",
    highlightLength: "long",
    hiddenSize: "hidden 3xl:block 2xl:hidden sm:block",
  },
  {
    text: "UT 결과 문서화",
  },
  {
    text: "프로젝트 품질 향상에 기여",
  },
];

function UserFeedback() {
  const [showElements, setShowElements] = useState(Array(1).fill(null));
  const refs = [useRef<HTMLImageElement | null>(null)];

  useFadeInOnScroll(showElements, setShowElements, refs, true);
  return (
    <ExperienceLayout
      title="유저 테스트"
      img={
        <div className={`relative ${center} w-[700px] h-[600px]`}>
          <img
            className="w-[500px] shadow-xl z-10"
            src={userTest}
            alt="userTest"
          />
        </div>
      }
      descriptions={
        <ExperienceText
          textInfos={textInfos}
          refs={refs}
          showElements={showElements}
        />
      }
    />
  );
}

export default UserFeedback;
