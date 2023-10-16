import React from "react";

interface props {
  showElements: boolean[];
  refs: React.MutableRefObject<HTMLDivElement | null>[];
}

function DeepDive({ showElements, refs }: props) {
  return (
    <div className="flex flex-col items-center gap-5">
      <div
        ref={refs[0]}
        className={`fadeInUpAfter250ms font-bold ${
          showElements[0] ? "show" : ""
        }`}
      >
        DeepDive
      </div>
      <div
        ref={refs[1]}
        className={`fadeInUpAfter450ms ${showElements[1] ? "show" : ""}`}
      >
        궁금한 부분을 파고들 때 흥미를 느낍니다.
      </div>
      <div
        ref={refs[1]}
        className={`fadeInUpAfter450ms ${showElements[1] ? "show" : ""}`}
      >
        웹 개발에 있어 물음표는 저에게 "도전"을 의미합니다.
      </div>
      <div
        ref={refs[1]}
        className={`fadeInUpAfter450ms ${showElements[1] ? "show" : ""}`}
      >
        로직이나 문제가 복잡하다면, 오히려 더 깊게 파고들 수 있는 기회라고
        생각합니다.
      </div>
    </div>
  );
}

export default DeepDive;
