import { useRecoilState } from "recoil";
import { eyeRefAtom } from "../libs/atoms";

const useLogoEyes = () => {
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

  return {
    setContainerRef,
    setEyesRef,
    handleMouseMove,
  };
};

export default useLogoEyes;
