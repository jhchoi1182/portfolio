import { useRecoilValue } from "recoil";
import ExperienceLayout from "./ExperienceLayout";
import highlightShortDark from "../../../assets/images/highlights/highlight_short_dark.webp";
import highlightShortLight from "../../../assets/images/highlights/highlight_short_light.webp";
import netflixClone from "../../../assets/images/netflixClone.webp";
import velogClone from "../../../assets/images/velogClone.webp";
import { darkModeAtom } from "../../../libs/atoms";

function UIDesign() {
  const isDark = useRecoilValue(darkModeAtom);
  return (
    <ExperienceLayout
      title="디테일한 UI"
      img={
        <div className="relative w-[700px] h-[400px]">
          <img
            className="w-[500px] absolute inset-0 shadow-xl"
            src={velogClone}
            alt="velogClone"
          />
          <img
            className="w-[500px] absolute bottom-0 right-0 shadow-xl"
            src={netflixClone}
            alt="netflixClone"
          />
        </div>
      }
      descriptions={
        <>
          <li>
            <span className="relative">
              <span className="relative z-10">1px단위까지 </span>
              <img
                className="absolute -top-3 -left-3 z-0"
                src={isDark ? highlightShortDark : highlightShortLight}
                alt="highlightShort"
              />
            </span>
            기울이는 웹 개발
          </li>
          <li>
            미디어 쿼리, rem, %를 활용한
            <span className="relative">
              <span className="relative z-10"> 반응형 웹 </span>
              <img
                className="absolute -top-2 left-0 z-0"
                src={isDark ? highlightShortDark : highlightShortLight}
                alt="highlightShort"
              />
            </span>
            작업
          </li>
          <li></li>
        </>
      }
    />
  );
}

export default UIDesign;
