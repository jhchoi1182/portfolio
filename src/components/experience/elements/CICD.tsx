import { useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import ExperienceLayout from "./ExperienceLayout";
import cicd from "../../../assets/images/about/cicd.svg";
import highlightLongDark from "../../../assets/images/highlights/highlight_long_dark.webp";
import highlightLongLight from "../../../assets/images/highlights/highlight_long_light.webp";
import highlightShortDark from "../../../assets/images/highlights/highlight_short_dark.webp";
import highlightShortLight from "../../../assets/images/highlights/highlight_short_light.webp";
import useScrollFadeIn from "../../../hooks/useScrollFadeIn";
import { darkModeAtom } from "../../../libs/atoms";
import { center } from "../../../styles/classNames";

function CICD() {
  const isDark = useRecoilValue(darkModeAtom);
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
          <li>
            GitHub Actions를 이용한
            <span className="relative">
              <span className="relative z-10"> 테스트 자동화</span>
              <img
                ref={refs[0]}
                className={`absolute -top-4 left-0 z-0 hiddenInitially ${
                  showElements[0] ? "revealBrushAfter250ms" : ""
                }`}
                src={isDark ? highlightShortDark : highlightShortLight}
                alt="highlightShort"
              />
            </span>
          </li>
          <li></li>
          <li>자동 병합 설정</li>
          <li>정적 배포(Vercel)를 통한 CI/CD 프로세스</li>
          <li>
            <span className="relative">
              <span className="relative z-10">개발 생산성 개선</span>
              <img
                ref={refs[1]}
                className={`absolute -top-0 left-0 z-0 hiddenInitially ${
                  showElements[1] ? "revealBrushAfter450ms" : ""
                }`}
                src={isDark ? highlightLongDark : highlightLongLight}
                alt="highlightLong"
              />
            </span>
          </li>
        </>
      }
    />
  );
}

export default CICD;
