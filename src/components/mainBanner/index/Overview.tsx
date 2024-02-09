import { useState, useRef } from "react";
import "../css/animation.css";
import useFadeInOnScroll from "../../../hooks/useFadeInOnScroll";
import DeepDive from "../elements/DeepDive";
import HeartBeat from "../elements/HeartBeat";
import Perseverance from "../elements/Perseverance";

const Overview: React.FC = () => {
  const [elementsVisible, setElementsVisible] = useState(Array(4).fill(null));
  const refs = [
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
  ];

  useFadeInOnScroll(elementsVisible, setElementsVisible, refs);

  return (
    <div className="relative w-full h-screen text-base leading-[20px] z-20 font-chosunilbo overflow-hidden lg:text-3xl lg:leading-[55px] md:text-2xl md:leading-[45px] sm:text-xl sm:leading-[40px]">
      <DeepDive elementsVisible={elementsVisible} refs={refs} />
      <Perseverance elementsVisible={elementsVisible} refs={refs} />
      <HeartBeat />
    </div>
  );
};

export default Overview;
