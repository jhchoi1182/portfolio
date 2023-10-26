import { useState, useEffect } from "react";
import useLogoEyes from "../../../../hooks/useLogoEyes";
import { center } from "../../../../styles/classNames";

const styles = {
  box: `${center} w-12 h-full bg-inverse dark:bg-primary rounded-md select-none`,
};

function LogoEyes() {
  const [crouchDownAnimation, setCrouchDownAnimation] = useState(false);
  const [isHappy, setIsHappy] = useState(false);
  const { isBottom, setContainerRef, setEyesRef } = useLogoEyes();

  useEffect(() => {
    if (!isBottom) {
      setCrouchDownAnimation(false);
      setIsHappy(false);
      return;
    }
    setCrouchDownAnimation(true);
    const timeout = setTimeout(() => setIsHappy(true), 500);
    return () => clearTimeout(timeout);
  }, [isBottom]);

  return (
    <>
      {isHappy ? (
        <div className={`${styles.box} trampoline`}>
          <div className="pb-3">
            <span className="text-lg">^ ^</span>
          </div>
        </div>
      ) : (
        <div
          ref={(ref) => setContainerRef(ref)}
          className={`${styles.box} ${crouchDownAnimation ? "crouchDown" : ""}`}
        >
          <div ref={(ref) => setEyesRef(ref)}>
            {crouchDownAnimation ? (
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
