import { useEffect, useState } from "react";

function FirstBuildLoading() {
  const [count, setCount] = useState(0);
  const isHundredPercent = count === 99;

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

  useEffect(() => {
    document.body.style.overflow = "hidden";

    let timeout: ReturnType<typeof setTimeout>;
    if (isHundredPercent) {
      timeout = setTimeout(() => {
        document.body.style.overflow = "auto";
      }, 1000);
    }
    return () => clearTimeout(timeout);
  }, [isHundredPercent]);

  return (
    <div
      className={`fixed z-[9999] w-full h-full bg-white dark:bg-black ${
        isHundredPercent ? "slideToDownAfter500ms" : ""
      }`}
    >
      <div className="flex items-center w-full h-full px-12">
        <div className="flex justify-between w-full h-[200px] overflow-hidden">
          <div
            className={`slidingText ${
              isHundredPercent ? "moveUp" : "moveDown"
            }`}
          >
            <h1 className="text-[200px] font-extrabold font-notoSans">0</h1>
            <h1 className="text-[200px] font-extrabold font-notoSans">1</h1>
          </div>
          <div
            className={`slidingText ${
              isHundredPercent ? "moveUp" : "moveDown"
            }`}
          >
            <h1 className="text-[200px] font-extrabold font-notoSans">
              {count < 10 ? `0${count}` : count}
            </h1>
            <h1 className="text-[200px] font-extrabold font-notoSans">00</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstBuildLoading;
