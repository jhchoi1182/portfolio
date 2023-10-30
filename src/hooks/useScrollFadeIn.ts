import { useEffect } from "react";

const useScrollFadeIn = (
  showElements: boolean[],
  setShowElements: React.Dispatch<React.SetStateAction<boolean[]>>,
  refs: React.MutableRefObject<HTMLDivElement | null>[],
  xAxis?: boolean,
) => {
  useEffect(() => {
    const checkScroll = () => {
      if (showElements.every((value) => value === true)) return;
      const newShowElements = showElements.map((isShown, index) => {
        if (isShown) return true;
        const currentRef = refs[index].current;
        if (!currentRef) return false;
        const rect = currentRef.getBoundingClientRect();
        const isVerticallyHalfVisible =
          rect.top <= window.innerHeight - rect.height / 2;
        const isHorizontallyHalfVisible =
          rect.left <= window.innerWidth - rect.width / 2;
        if (xAxis) {
          return isVerticallyHalfVisible && isHorizontallyHalfVisible;
        }
        return isVerticallyHalfVisible;
      });
      if (newShowElements.every((value) => value === null)) return;
      setShowElements(newShowElements);
    };

    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, [showElements]);
};

export default useScrollFadeIn;
