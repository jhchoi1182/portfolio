import { useState, useEffect, useRef } from "react";
import "../css/animation.css";

const Overview: React.FC = () => {
  const [showElements, setShowElements] = useState([
    false,
    false,
    false,
    false,
  ]);
  const refs = [
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
  ];

  useEffect(() => {
    const checkScroll = () => {
      const newShowElements = showElements.map((isShown, index) => {
        if (isShown) return true;
        const currentRef = refs[index].current;
        if (!currentRef) return false;
        const rect = currentRef.getBoundingClientRect();
        return rect.top <= window.innerHeight - rect.height / 2;
      });
      setShowElements(newShowElements);
    };

    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, [showElements]);

  return (
    <div className="w-full h-screen text-3xl">
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
      <div className="flex flex-col items-center gap-5 mt-40">
        <div
          ref={refs[2]}
          className={`fadeInUpAfter650ms font-bold ${
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
    </div>
  );
};

export default Overview;
