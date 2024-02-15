import { useEffect, useState } from "react";
import LogoEyes from "./LogoEyes";
import { center } from "../../../../styles/classNames";
import "../css/animation.css";
import { REACTIVE_COLOR } from "../../../../styles/colors";

function Logo() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [eyeMode, setEyeMode] = useState<boolean | null>(null);
  const eyeModeTransitioning = eyeMode === false;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) return setIsScrolled(true);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (isScrolled) {
      setEyeMode(false);
      timeout = setTimeout(() => {
        setEyeMode(true);
      }, 1050);
    }
    return () => clearTimeout(timeout);
  }, [isScrolled]);

  return (
    <div
      className={`w-36 h-12 ${REACTIVE_COLOR.inverseText} text-xl font-semibold lg:text-2xl`}
    >
      {eyeMode ? (
        <LogoEyes />
      ) : (
        <div
          className={`${center} w-full h-full ${
            REACTIVE_COLOR.inverseBg
          } rounded-md ${eyeModeTransitioning ? "animate-shrink" : ""}`}
        >
          <div>
            {Array.from("JIHYEON").map((char, i) => (
              <span
                key={i}
                className={`${
                  eyeModeTransitioning ? `animate-charFadeOut-${i}` : ""
                }`}
              >
                {char}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Logo;
