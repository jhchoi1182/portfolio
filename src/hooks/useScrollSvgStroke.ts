import { useEffect } from "react";

const useScrollSvgStroke = (
  containerRef: React.MutableRefObject<HTMLDivElement | null>,
  pathRef: React.MutableRefObject<SVGPathElement | null>,
  length: number,
  setLength: React.Dispatch<React.SetStateAction<number>>,
) => {
  const calcDashoffset = () => {
    const scrolledHeight = window.scrollY + window.innerHeight * 0.8;
    if (containerRef.current) {
      const ratio =
        (scrolledHeight - containerRef.current.offsetTop) /
        containerRef.current.offsetHeight;
      const value = length - length * ratio;
      return value < 0 ? 0 : value > length ? length : value;
    }
  };

  useEffect(() => {
    if (pathRef.current) {
      const pathLength = pathRef.current.getTotalLength();
      setLength(pathLength);
      pathRef.current.style.strokeDasharray = `${pathLength} ${pathLength}`;
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (pathRef.current) {
        pathRef.current.style.strokeDashoffset = `${calcDashoffset()}`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [length]);
};

export default useScrollSvgStroke;
