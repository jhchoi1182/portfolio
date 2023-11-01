import { useRef, useState } from "react";
import ExperienceLayout from "./ExperienceLayout";
import Highlight from "./Highlight";
import consolog from "../../../assets/images/project/consolog.webp";
import jjabflix from "../../../assets/images/project/jjabflix.webp";
import useScrollFadeIn from "../../../hooks/useScrollFadeIn";

const textInfos: experienceText[] = [
  {
    text: "**1px단위까지** 기울이는 웹 개발",
    highlightIndex: 1,
    topLeft: "-top-3 -left-3",
    highlightLength: "short",
  },
  {
    text: "미디어 쿼리, vw, rem, %를 활용한 **반응형 웹** 작업",
    highlightIndex: 2,
    topLeft: "-top-2 -left-1",
    highlightLength: "short",
  },
];

function UIDesign() {
  const [showElements, setShowElements] = useState(Array(2).fill(null));
  const refs = [
    useRef<HTMLImageElement | null>(null),
    useRef<HTMLImageElement | null>(null),
  ];

  useScrollFadeIn(showElements, setShowElements, refs, true);

  return (
    <ExperienceLayout
      title="디테일한 UI"
      img={
        <div className="relative w-[700px] h-[400px]">
          <img
            className="w-[500px] absolute inset-0 shadow-xl"
            src={consolog}
            alt="consolog"
          />
          <img
            className="w-[500px] absolute bottom-0 right-0 shadow-xl"
            src={jjabflix}
            alt="jjabflix"
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

export default UIDesign;
