import { useEffect, useState } from "react";
import LogoEyes from "./LogoEyes";
import { center } from "../../../../styles/layout";
import "../css/animation.css";

function Logo() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [toggleAnimation, setToggleAnimation] = useState<boolean | null>(null);

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
      setToggleAnimation(true);
      timeout = setTimeout(() => {
        setToggleAnimation(false);
      }, 1050);
    }
    return () => clearTimeout(timeout);
  }, [isScrolled]);

  return (
    <div className="w-36 h-12 text-white dark:text-black text-2xl font-semibold">
      {toggleAnimation === false ? (
        <LogoEyes />
      ) : (
        <div
          className={`${center} w-full h-full bg-black dark:bg-[#f1f1f1] rounded-md ${
            toggleAnimation ? "shrink" : ""
          }`}
        >
          <div>
            {Array.from("JIHYEON").map((char, i) => (
              <span
                key={i}
                className={`${toggleAnimation ? `charFadeOut-${i}` : ""}`}
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
