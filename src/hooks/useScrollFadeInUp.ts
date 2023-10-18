import { useEffect } from "react";

const useScrollFadeInUp = (
  showElements: boolean[],
  setShowElements: React.Dispatch<React.SetStateAction<boolean[]>>,
  refs: React.MutableRefObject<HTMLDivElement | null>[],
) => {
  useEffect(() => {
    const checkScroll = () => {
      const newShowElements = showElements.map((isShown, index) => {
        if (isShown) return true;
        const currentRef = refs[index].current;
        if (!currentRef) return false;
        const rect = currentRef.getBoundingClientRect();
        return rect.top <= window.innerHeight - rect.height / 2;
      });
      setShowElements(newShowElements);
    };

    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, [showElements]);
};

export default useScrollFadeInUp;
