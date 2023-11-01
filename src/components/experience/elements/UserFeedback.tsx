import { useRef, useState } from "react";
import ExperienceLayout from "./ExperienceLayout";
import Highlight from "./Highlight";
import userTest from "../../../assets/images/about/userTest.webp";
import useScrollFadeIn from "../../../hooks/useScrollFadeIn";
import { center } from "../../../styles/classNames";

const textInfos: experienceText[] = [
  {
    text: "**2주간의 45개 피드백을 통한 UI/UX 개선**",
    highlightIndex: 1,
    topLeft: "-top-4 left-0",
    highlightLength: "long",
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

  useScrollFadeIn(showElements, setShowElements, refs, true);
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
        <>
          {textInfos.map((info, i) => {
            const splitText = info.text.split("**");
            if (!info.highlightIndex)
              return (
                <li key={i}>
                  <span>{info.text}</span>
                </li>
              );
            else
              return (
                <li key={i}>
                  <span>{splitText[0]}</span>
                  <Highlight
                    highlightIndex={info.highlightIndex}
                    highlightRef={refs[info.highlightIndex - 1]}
                    topLeft={info.topLeft}
                    isVisible={showElements[info.highlightIndex - 1]}
                    highlightLength={info.highlightLength}
                  >
                    {splitText[1]}
                  </Highlight>
                  <span>{splitText[2]}</span>
                </li>
              );
          })}
        </>
      }
    />
  );
}

export default UserFeedback;
