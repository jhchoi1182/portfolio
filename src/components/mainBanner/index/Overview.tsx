import { useState, useEffect, useRef } from "react";
import "../css/animation.css";
import DeepDive from "../elements/DeepDive";
import Perseverance from "../elements/Perseverance";

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
      <DeepDive showElements={showElements} refs={refs} />
      <Perseverance showElements={showElements} refs={refs} />
    </div>
  );
};

export default Overview;
