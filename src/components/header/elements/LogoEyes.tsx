import { useEffect, useState } from "react";
import useLogoEyes from "../../../hooks/useLogoEyes";
import { center } from "../../../styles/layout";
import "../css/animation.css";

function LogoEyes() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [toggleAnimation, setToggleAnimation] = useState<boolean | null>(null);
  const { setContainerRef, setEyesRef } = useLogoEyes();

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
        <div
          ref={(ref) => setContainerRef(ref)}
          className={`${center} w-12 h-full bg-black dark:bg-[#f1f1f1] rounded-md select-none`}
        >
          <div ref={(ref) => setEyesRef(ref)}>
            <span className="animate-fadeIn">' '</span>
          </div>
        </div>
      ) : (
        <div
          className={`${center} w-full h-full bg-black dark:bg-[#f1f1f1] rounded-md ${
            toggleAnimation ? "shrink" : ""
          }`}
        >
          <div>
            {Array.from("JIHYEON").map((char, index) => (
              <span
                className={`${toggleAnimation ? `charFadeOut-${index}` : ""}`}
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

export default LogoEyes;
