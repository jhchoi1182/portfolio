import { useState, useEffect } from "react";

const useScrollX = (
  containerRef: React.MutableRefObject<HTMLDivElement | null>,
) => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const sectionStart = containerRef.current?.offsetTop ?? 0;
  const sectionEnd = sectionStart + window.innerHeight * 4;
  const isOutsideSection = scrollY + window.innerHeight >= sectionEnd;

  const sectionHeight = sectionEnd - sectionStart;
  const scrolledHeight = Math.min(
    Math.max(scrollY - sectionStart, 0),
    sectionHeight,
  );

  const translatePercentage = isOutsideSection
    ? 75
    : (scrolledHeight / sectionHeight) * 100;

  return { translatePercentage };
};

export default useScrollX;
