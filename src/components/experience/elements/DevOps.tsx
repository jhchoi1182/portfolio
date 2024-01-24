import { useRef, useState } from "react";
import ExperienceLayout from "./atoms/ExperienceLayout";
import ExperienceText from "./atoms/ExperienceText";
import cicd from "../../../assets/images/about/cicd.svg";
import useFadeInOnScroll from "../../../hooks/useFadeInOnScroll";
import { center } from "../../../styles/classNames";

const textInfos: experienceText[] = [
  {
    text: "GitHub Actions를 이용한 **테스트 자동화**",
    highlightIndex: 1,
    topLeft: "-top-4 -left-1",
    highlightLength: "short",
    hiddenSize: "block 3xl:block 2xl:hidden",
  },
  {
    text: "자동 병합 설정",
  },
  {
    text: "**CI/CD 파이프라인** 구축",
    highlightIndex: 2,
    topLeft: "-top-0 left-0",
    highlightLength: "long",
  },
  {
    text: "Docker Compose로 멀티 **컨테이너 관리**",
    highlightIndex: 3,
    topLeft: "-top-4 -left-1",
    highlightLength: "short",
  },
  {
    text: "**개발 생산성 개선**",
    highlightIndex: 4,
    topLeft: "-top-0 left-0",
    highlightLength: "long",
  },
];

function DevOps() {
  const [showElements, setShowElements] = useState(Array(4).fill(null));
  const refs = [
    useRef<HTMLImageElement | null>(null),
    useRef<HTMLImageElement | null>(null),
    useRef<HTMLImageElement | null>(null),
    useRef<HTMLImageElement | null>(null),
  ];

  useFadeInOnScroll(showElements, setShowElements, refs, true);

  return (
    <ExperienceLayout
      title="자동화 프로세스의 DevOps"
      img={
        <div className={`relative ${center} w-[700px] h-[600px]`}>
          <img className="w-[500px] h-[250px] bg-primary shadow-xl z-10" src={cicd} alt="cicd" />
        </div>
      }
      descriptions={
        <ExperienceText textInfos={textInfos} refs={refs} showElements={showElements} />
      }
    />
  );
}

export default DevOps;