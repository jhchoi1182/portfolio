import { useEffect } from "react";
import { BG_COLOR } from "../../../styles/colors";

interface props {
  isVisible: boolean;
  handleClose: () => void;
}

function Backdrop({ isVisible, handleClose }: props) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div
      className={`fixed w-full h-full inset-0 ${
        BG_COLOR.black
      } animate-fadeInOpacity ${
        isVisible ? "animate-fadeInOpacity" : "animate-fadeOutOpacity"
      }`}
      onClick={handleClose}
    />
  );
}

export default Backdrop;
