import { useRef, useState } from "react";
import ExperienceLayout from "./ExperienceLayout";
import Highlight from "./Highlight";
import cicd from "../../../assets/images/about/cicd.svg";
import useScrollFadeIn from "../../../hooks/useScrollFadeIn";
import { center } from "../../../styles/classNames";

const textInfos: experienceText[] = [
  {
    text: "GitHub Actions를 이용한 **테스트 자동화**",
    highlightIndex: 1,
    topLeft: "-top-4 -left-1",
    highlightLength: "short",
  },
  {
    text: "자동 병합 설정",
  },
  {
    text: "정적 배포를 통한 CI/CD",
  },
  {
    text: "**개발 생산성 개선**",
    highlightIndex: 2,
    topLeft: "-top-0 left-0",
    highlightLength: "long",
  },
];

function CICD() {
  const [showElements, setShowElements] = useState(Array(2).fill(null));
  const refs = [
    useRef<HTMLImageElement | null>(null),
    useRef<HTMLImageElement | null>(null),
  ];

  useScrollFadeIn(showElements, setShowElements, refs, true);

  return (
    <ExperienceLayout
      title="CI/CD 파이프라인 구축"
      img={
        <div className={`relative ${center} w-[700px] h-[600px]`}>
          <img
            className="w-[500px] h-[250px] bg-primary shadow-xl z-10"
            src={cicd}
            alt="cicd"
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

export default CICD;
