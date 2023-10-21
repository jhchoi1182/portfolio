import useLogoEyes from "../../../../hooks/useLogoEyes";
import { center } from "../../../../styles/layout";

function LogoEyes() {
  const { setContainerRef, setEyesRef } = useLogoEyes();

  return (
    <div
      ref={(ref) => setContainerRef(ref)}
      className={`${center} w-12 h-full bg-black dark:bg-[#f1f1f1] rounded-md select-none`}
    >
      <div ref={(ref) => setEyesRef(ref)}>
        <span className="animate-fadeIn">' '</span>
      </div>
    </div>
  );
}

export default LogoEyes;
