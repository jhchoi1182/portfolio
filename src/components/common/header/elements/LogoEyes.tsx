import { useState, useEffect } from "react";
import useLogoEyes from "../../../../hooks/useLogoEyes";
import { center } from "../../../../styles/classNames";

const styles = {
  box: `${center} w-12 h-full bg-black dark:bg-[#f1f1f1] rounded-md select-none`,
};

function LogoEyes() {
  const [toggleAnimation, setToggleAnimation] = useState(false);
  const [eyeMode, setEyeMode] = useState(false);
  const { isBottom, setContainerRef, setEyesRef } = useLogoEyes();

  useEffect(() => {
    if (!isBottom) return;
    setToggleAnimation(true);
    const timeout = setTimeout(() => setEyeMode(true), 500);
    return () => clearTimeout(timeout);
  }, [isBottom]);

  return (
    <>
      {eyeMode ? (
        <div className={`${styles.box} trampoline`}>
          <div className="pb-3">
            <span className="text-lg">^ ^</span>
          </div>
        </div>
      ) : (
        <div
          ref={(ref) => setContainerRef(ref)}
          className={`${styles.box} ${toggleAnimation ? "crouchDown" : ""}`}
        >
          <div ref={(ref) => setEyesRef(ref)}>
            {toggleAnimation ? (
              <span className="text-lg">^ ^</span>
            ) : (
              <span className="animate-fadeIn">' '</span>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default LogoEyes;
