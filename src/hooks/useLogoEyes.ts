import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { eyeRefAtom } from "../libs/atoms";

const useLogoEyes = () => {
  const [isBottom, setIsBottom] = useState(false);
  const [{ containerRef, eyesRef }, setRef] = useRecoilState(eyeRefAtom);

  const setContainerRef = (ref: HTMLDivElement | null) => {
    if (ref && !containerRef)
      setRef((prevState) => ({ ...prevState, containerRef: ref }));
  };
  const setEyesRef = (ref: HTMLDivElement | null) => {
    if (ref && !eyesRef)
      setRef((prevState) => ({ ...prevState, eyesRef: ref }));
  };

  const handleMouseMove = (e: { clientX: number; clientY: number }) => {
    if (isBottom) return;
    if (!containerRef || !eyesRef) return;

    const rect = containerRef.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const distanceFromCenter = Math.sqrt(x * x + y * y);
    const maxDistance = Math.sqrt(
      (rect.width / 2) ** 2 + (rect.height / 2) ** 2,
    );
    const distanceScale = 1 + 0.025 * (distanceFromCenter / maxDistance);
    const resistanceScale = 0.025;

    const baseRangeX = ((rect.width * 10) / 100) * distanceScale;
    const baseRangeY = ((rect.height * 10) / 100) * distanceScale;

    const offsetX = Math.min(
      Math.max(x * resistanceScale, -baseRangeX),
      baseRangeX,
    );
    const offsetY = Math.min(
      Math.max(y * resistanceScale, -baseRangeY),
      baseRangeY,
    );

    eyesRef.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  };

  useEffect(() => {
    const handleScroll = () => {
      // if (isBottom) return;
      const scrollTop = document.documentElement.scrollTop;
      const innerHeight = window.innerHeight;
      const scrollHeight = document.body.scrollHeight;

      if (scrollTop + innerHeight >= scrollHeight) {
        setIsBottom(true);
      } else return setIsBottom(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!eyesRef) return;
    eyesRef.style.transform = `translate(0px, 0px)`;
  }, [isBottom]);

  return {
    isBottom,
    setContainerRef,
    setEyesRef,
    handleMouseMove,
  };
};

export default useLogoEyes;
