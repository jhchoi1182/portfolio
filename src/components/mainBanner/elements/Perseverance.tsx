import React from "react";

interface Props {
  showElements: boolean[];
  refs: React.MutableRefObject<HTMLDivElement | null>[];
}

const texts = [
  `문제가 어렵더라도, 어떤 벽에 막히더라도 쉽게 포기하지 않습니다.`,
  `주어진 문제를 해결할 때까지 꾸준히 나아가며,`,
  `이 과정에서 배운 것들을 기록하는 습관이 있습니다.`,
];

function Perseverance({ showElements, refs }: Props) {
  return (
    <div className="relative flex flex-col items-center gap-5 mt-40 z-10">
      <div
        ref={refs[2]}
        className={`fadeInUpAfter250ms text-4xl font-bold ${
          showElements[2] ? "show" : ""
        }`}
      >
        Perseverance
      </div>
      {texts.map((text, i) => (
        <div
          key={i}
          ref={refs[3]}
          className={`fadeInUpAfter250ms ${showElements[3] ? "show" : ""}`}
        >
          {text}
        </div>
      ))}
    </div>
  );
}

export default Perseverance;
