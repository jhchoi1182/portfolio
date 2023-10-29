import { useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import ExperienceLayout from "./ExperienceLayout";
import userTest from "../../../assets/images/about/userTest.webp";
import highlightLongDark from "../../../assets/images/highlights/highlight_long_dark.webp";
import highlightLongLight from "../../../assets/images/highlights/highlight_long_light.webp";
import useScrollFadeIn from "../../../hooks/useScrollFadeIn";
import { darkModeAtom } from "../../../libs/atoms";
import { center } from "../../../styles/classNames";

function UserFeedback() {
  const isDark = useRecoilValue(darkModeAtom);

  const [showElements, setShowElements] = useState(Array(2).fill(null));
  const refs = [
    useRef<HTMLImageElement | null>(null),
    useRef<HTMLImageElement | null>(null),
  ];

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
          <li>
            <span className="relative">
              <span className="relative z-10">
                2주간의 45개 피드백을 통한 UI/UX 개선
              </span>
              <img
                ref={refs[0]}
                className={`absolute -top-4 left-0 z-0 block hiddenInitially 2xl:block xl:hidden ${
                  showElements[0] ? "revealBrushAfter250ms" : ""
                }`}
                src={isDark ? highlightLongDark : highlightLongLight}
                alt="highlightLong"
              />
            </span>
          </li>
          <li>UT 결과 문서화</li>
          <li>프로젝트 품질 향상에 기여</li>
        </>
      }
    />
  );
}

export default UserFeedback;
