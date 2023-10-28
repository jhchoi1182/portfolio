import { useEffect, useState } from "react";
import LogoEyes from "./LogoEyes";
import { center } from "../../../../styles/classNames";
import "../css/animation.css";

function Logo() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [eyeMode, setEyeMode] = useState<boolean | null>(null);

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
    <div className="w-36 h-12 text-white dark:text-black text-2xl lg:text-xl font-semibold">
      {eyeMode ? (
        <LogoEyes />
      ) : (
        <div
          className={`${center} w-full h-full bg-inverse dark:bg-primary rounded-md ${
            eyeMode === false ? "shrink" : ""
          }`}
        >
          <div>
            {Array.from("JIHYEON").map((char, i) => (
              <span
                key={i}
                className={`${eyeMode === false ? `charFadeOut-${i}` : ""}`}
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
