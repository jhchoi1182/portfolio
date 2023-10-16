import React from "react";

interface props {
  showElements: boolean[];
  refs: React.MutableRefObject<HTMLDivElement | null>[];
}

function Perseverance({ showElements, refs }: props) {
  return (
    <div className="relative flex flex-col items-center gap-5 mt-40 z-20">
      <div
        ref={refs[2]}
        className={`fadeInUpAfter650ms text-4xl font-bold ${
          showElements[2] ? "show" : ""
        }`}
      >
        Perseverance
      </div>
      <div
        ref={refs[3]}
        className={`fadeInUpAfter850ms ${showElements[3] ? "show" : ""}`}
      >
        문제가 어렵더라도, 어떤 벽에 막히더라도 쉽게 포기하지 않습니다.
      </div>
      <div
        ref={refs[3]}
        className={`fadeInUpAfter850ms ${showElements[3] ? "show" : ""}`}
      >
        주어진 문제를 해결할 때까지 꾸준히 나아가며,
      </div>
      <div
        ref={refs[3]}
        className={`fadeInUpAfter850ms ${showElements[3] ? "show" : ""}`}
      >
        이 과정에서 배운 것들을 기록하는 습관이 있습니다.
      </div>
    </div>
  );
}

export default Perseverance;
