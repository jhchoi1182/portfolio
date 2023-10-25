import { useState, useRef } from "react";
import "../css/animation.css";
import useScrollFadeIn from "../../../hooks/useScrollFadeIn";
import DeepDive from "../elements/DeepDive";
import HeartBeat from "../elements/HeartBeat";
import Perseverance from "../elements/Perseverance";

const Overview: React.FC = () => {
  const [showElements, setShowElements] = useState(Array(4).fill(null));
  const refs = [
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
  ];

  useScrollFadeIn(showElements, setShowElements, refs);

  return (
    <div className="relative w-full h-screen text-3xl z-20 font-chosunilbo">
      <DeepDive showElements={showElements} refs={refs} />
      <Perseverance showElements={showElements} refs={refs} />
      <HeartBeat />
    </div>
  );
};

export default Overview;
