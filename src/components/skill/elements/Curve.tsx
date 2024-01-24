import { useRef, useState, MutableRefObject } from "react";
import { useRecoilValue } from "recoil";
import useSvgStrokeOnScroll from "../../../hooks/useSvgStrokeOnScroll";
import { darkModeAtom } from "../../../libs/atoms";

interface Props {
  containerRef: MutableRefObject<HTMLDivElement | null>;
}

const Curve = ({ containerRef }: Props) => {
  const pathRef = useRef<SVGPathElement | null>(null);
  const [length, setLength] = useState<number>(0);
  const isDark = useRecoilValue(darkModeAtom);

  useSvgStrokeOnScroll(containerRef, pathRef, length, setLength);

  return (
    <svg
      width="1920"
      height="900"
      viewBox="0 0 1920 844"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        ref={pathRef}
        d="M1920.14 10C1086.82 52.4154 684.091 354.064 -5.36523 268.5C-5.36523 268.5 -212.239 233.476 -137.865 346C-63.492 458.524 -432.231 328.5 -5.36526 482.5C421.5 636.5 1310.2 389.243 1920.14 835.5"
        stroke="url(#paint0_linear_14_46)"
        strokeWidth="20"
      />
      <defs>
        {isDark ? (
          <linearGradient
            id="paint0_linear_14_46"
            x1="883.068"
            y1="10"
            x2="883.068"
            y2="835.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#680CFF" />
            <stop offset="0.473958" stopColor="#778DFF" />
            <stop offset="1" stopColor="#778DFF" />
          </linearGradient>
        ) : (
          <linearGradient
            id="paint0_linear_14_46"
            x1="883.068"
            y1="10"
            x2="883.068"
            y2="835.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#70FFD4" />
            <stop offset="0.473958" stopColor="#2EB7E1" />
            <stop offset="1" stopColor="#93FEFE" />
          </linearGradient>
        )}
      </defs>
    </svg>
  );
};

export default Curve;
