import React from "react";
import { useRecoilValue } from "recoil";
import highlightLongDark from "../../../../assets/images/highlights/highlight_long_dark.webp";
import highlightLongLight from "../../../../assets/images/highlights/highlight_long_light.webp";
import highlightShortDark from "../../../../assets/images/highlights/highlight_short_dark.webp";
import highlightShortLight from "../../../../assets/images/highlights/highlight_short_light.webp";
import { darkModeAtom } from "../../../../libs/atoms";

interface Props {
  highlightIndex?: number;
  highlightRef?: React.MutableRefObject<HTMLImageElement | null>;
  topLeft?: string;
  isVisible?: boolean;
  highlightLength?: "short" | "long";
  hiddenSize?: string;
  children: string;
}

function Highlight({
  highlightIndex,
  highlightRef,
  topLeft,
  isVisible,
  highlightLength,
  hiddenSize,
  children,
}: Props) {
  const isDark = useRecoilValue(darkModeAtom);
  const highlightShort = isDark ? highlightShortDark : highlightShortLight;
  const highlightLong = isDark ? highlightLongDark : highlightLongLight;
  const reavealAnimation = [
    "animate-revealBrushAfter250ms",
    "animate-revealBrushAfter450ms",
    "animate-revealBrushAfter650ms",
    "animate-revealBrushAfter850ms",
  ];

  return (
    <span className="relative">
      <span className="relative z-10">{children}</span>
      <img
        ref={highlightRef}
        className={`absolute ${topLeft} z-0 animate-hiddenInitially ${
          hiddenSize ? hiddenSize : ""
        } ${
          isVisible
            ? reavealAnimation[highlightIndex ? highlightIndex - 1 : 0]
            : ""
        }`}
        src={highlightLength === "short" ? highlightShort : highlightLong}
        alt={isDark ? "highlightDark" : "highlightLight"}
      />
    </span>
  );
}

export default Highlight;
