import React from "react";

interface Props {
  showElements: boolean[];
  refs: React.MutableRefObject<HTMLDivElement | null>[];
}

const texts = [
  `궁금한 부분을 파고들 때 흥미를 느낍니다.`,
  `웹 개발에 있어 물음표는 저에게 "도전"을 의미합니다.`,
  `로직이나 문제가 복잡하다면, 오히려 더 깊게 파고들 수 있는 기회라고 생각합니다.`,
];

function DeepDive({ showElements, refs }: Props) {
  return (
    <div className="relative flex flex-col items-center gap-5 z-20">
      <div
        ref={refs[0]}
        className={`fadeInUpAfter250ms text-4xl font-bold ${
          showElements[0] ? "show" : ""
        }`}
      >
        DeepDive
      </div>
      {texts.map((text, i) => (
        <div
          key={i}
          ref={refs[1]}
          className={`fadeInUpAfter250ms ${showElements[1] ? "show" : ""}`}
        >
          {text}
        </div>
      ))}
    </div>
  );
}

export default DeepDive;
