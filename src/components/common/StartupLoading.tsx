import { useEffect, useState } from "react";

function StartupLoading() {
  const [count, setCount] = useState(0);
  const isHundredPercent = count === 99;

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";

    if (!isHundredPercent) return;
    const overflowAuto = setTimeout(() => {
      document.body.style.overflow = "auto";
    }, 1500);
    return () => clearTimeout(overflowAuto);
  }, [isHundredPercent]);

  useEffect(() => {
    const duration = 1000;
    const totalCount = 99;
    const intervalTime = duration / totalCount;

    const interval = setInterval(() => {
      setCount((prevCount) => {
        const nextCount = prevCount + 1;
        if (nextCount > totalCount) {
          clearInterval(interval);
          return totalCount;
        }
        return nextCount;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`fixed z-[9999] w-full h-full bg-white dark:bg-black text-[100px] sm:text-[200px] ${
        isHundredPercent ? "animate-slideToDownAfter500ms" : ""
      }`}
    >
      <div className="flex items-center w-full h-full px-12">
        <div className="flex justify-between w-full h-[100px] overflow-hidden sm:h-[200px]">
          <div
            className={`transition-slidingText ${
              isHundredPercent ? "transform-moveUp" : "transform-moveDown"
            }`}
          >
            <h1 className="font-extrabold font-notoSans">0</h1>
            <h1 className="font-extrabold font-notoSans">1</h1>
          </div>
          <div
            className={`transition-slidingText ${
              isHundredPercent ? "transform-moveUp" : "transform-moveDown"
            }`}
          >
            <h1 className="font-extrabold font-notoSans">
              {count < 10 ? `0${count}` : count}
            </h1>
            <h1 className="font-extrabold font-notoSans">00</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartupLoading;
