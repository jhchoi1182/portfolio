import { useEffect } from "react";

const useFadeInOnScroll = (
  elementsVisible: boolean[],
  setElementsVisible: React.Dispatch<React.SetStateAction<boolean[]>>,
  refs: React.MutableRefObject<HTMLDivElement | null>[],
  isXAxis?: boolean,
) => {
  useEffect(() => {
    const handleScroll = () => {
      if (elementsVisible.every((isVisible) => isVisible)) return;

      const updatedVisibility = elementsVisible.map((isShown, index) => {
        if (isShown) return true;

        const currentRef = refs[index].current;
        if (!currentRef) return false;
        const rect = currentRef.getBoundingClientRect();
        const isVerticallyHalfVisible =
          rect.top <= window.innerHeight - rect.height / 2;
        const isHorizontallyHalfVisible =
          rect.left <= window.innerWidth - rect.width / 2;

        return isXAxis
          ? isVerticallyHalfVisible && isHorizontallyHalfVisible
          : isVerticallyHalfVisible;
      });

      if (updatedVisibility.every((isVisible) => isVisible === false)) return;
      setElementsVisible(updatedVisibility);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [elementsVisible]);
};

export default useFadeInOnScroll;
