import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useSetRecoilState } from "recoil";
import { contactModalAtom } from "../../../libs/atoms";
import Footer from "../../common/index/Footer";
import Backdrop from "../elements/Backdrop";
import "../css/animation.css";

function ContactModal() {
  const [isVisible, setIsVisible] = useState(true);
  const setIsContactModal = useSetRecoilState(contactModalAtom);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => setIsContactModal(false), 1000);
  };

  return (
    <div className="fixed z-50 inset-0 w-full h-full">
      <Backdrop isVisible={isVisible} handleClose={handleClose} />
      <div
        className={`absolute bottom-0 w-full bg-[#f1f1f1] text-black font-chosunilbo ${
          isVisible ? "slideToTop" : "slideToDown"
        }`}
      >
        <AiOutlineClose
          className="absolute top-8 right-8 w-5 h-5 cursor-pointer"
          onClick={handleClose}
        />
        <Footer />
      </div>
    </div>
  );
}

export default ContactModal;
