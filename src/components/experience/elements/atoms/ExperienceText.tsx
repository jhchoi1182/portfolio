import React from "react";
import Highlight from "./Highlight";

interface Props {
  textInfos: experienceText[];
  refs: React.MutableRefObject<HTMLImageElement | null>[];
  elementsVisible: boolean[];
}

function ExperienceText({ textInfos, refs, elementsVisible }: Props) {
  return (
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
              <span className="relative z-20">{splitText[0]}</span>
              <Highlight
                highlightIndex={info.highlightIndex}
                highlightRef={refs[info.highlightIndex - 1]}
                topLeft={info.topLeft}
                isVisible={elementsVisible[info.highlightIndex - 1]}
                highlightLength={info.highlightLength}
                hiddenSize={info.hiddenSize}
              >
                {splitText[1]}
              </Highlight>
              <span className="relative z-20">{splitText[2]}</span>
            </li>
          );
      })}
    </>
  );
}

export default ExperienceText;
