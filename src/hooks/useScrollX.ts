import { useEffect } from "react";

const useScrollX = (
  containerRef: React.MutableRefObject<HTMLDivElement | null>,
  scrollDivRef: React.MutableRefObject<HTMLDivElement | null>,
) => {
  const handleScroll = () => {
    const sectionStart = (containerRef.current?.offsetTop ?? 0) + 100;
    const sectionEnd = sectionStart + window.innerHeight * 4 - 180;
    const isOutsideSection = window.scrollY + window.innerHeight >= sectionEnd;

    const sectionHeight = sectionEnd - sectionStart;
    const scrolledHeight = Math.min(
      Math.max(window.scrollY - sectionStart, 0),
      sectionHeight,
    );

    const translatePercentage = isOutsideSection
      ? 75
      : (scrolledHeight / sectionHeight) * 100;

    if (scrollDivRef.current) {
      scrollDivRef.current.style.transform = `translateX(-${translatePercentage}%)`;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
};

export default useScrollX;
