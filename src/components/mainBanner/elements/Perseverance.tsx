import React from "react";

interface Props {
  elementsVisible: boolean[];
  refs: React.MutableRefObject<HTMLDivElement | null>[];
}

const texts = [
  `문제가 어렵더라도, 어떤 벽에 막히더라도 쉽게 포기하지 않습니다.`,
  `주어진 문제를 해결할 때까지 꾸준히 나아가며,`,
  `이 과정에서 배운 것들을 기록하는 습관이 있습니다.`,
];

function Perseverance({ elementsVisible, refs }: Props) {
  return (
    <div className="relative text-center mt-24 z-10 sm:mt-40">
      <div
        ref={refs[2]}
        className={`animate-fadeInUpAfter250ms text-2xl font-bold mb-3 md:text-4xl sm:text-3xl ${
          elementsVisible[2] ? "animate-show" : ""
        }`}
      >
        Perseverance
      </div>
      {texts.map((text, i) => (
        <div
          key={i}
          ref={refs[3]}
          className={`animate-fadeInUpAfter250ms ${
            elementsVisible[3] ? "animate-show" : ""
          }`}
        >
          {text}
        </div>
      ))}
    </div>
  );
}

export default Perseverance;
