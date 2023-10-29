import { useState, useEffect } from "react";
import { GoArrowUp } from "react-icons/go";
import { center } from "../../../styles/classNames";

function ToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [toggleFadeOut, setToggleFadeOut] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 0) {
        setToggleFadeOut(false);
        setIsVisible(true);
      } else {
        setToggleFadeOut(true);
        setTimeout(() => setIsVisible(false), 500);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  if (!isVisible) return;

  return (
    <button
      className={`fixed z-40 bottom-10 right-10 ${center} w-14 h-14 shadow-md rounded-full bg-black dark:bg-white animate-fadeIn250ms ${
        toggleFadeOut ? "animate-fadeOut250ms" : ""
      }`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <GoArrowUp className="text-3xl text-white dark:text-black" />
    </button>
  );
}

export default ToTopButton;
