import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { GoArrowRight } from "react-icons/go";
import useNavigateWithLoading from "../../../hooks/useNavigateWithLoading";
import useRouteNavigation from "../../../hooks/useRouteNavigation";
import Footer from "../../common/Footer";
import Backdrop from "../elements/Backdrop";
import "../css/animation.css";

function ContactModal({
  setIsContactModal,
}: {
  setIsContactModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [isVisible, setIsVisible] = useState(true);

  const { isAbout, isProject } = useRouteNavigation();
  const navigateAfter500ms = useNavigateWithLoading();

  const handleClose = () => {
    console.log(1);

    setIsVisible(false);
    setTimeout(() => setIsContactModal(false), 1000);
  };
  const handleNavigation = (pathname: string) => {
    setIsVisible(false);
    setTimeout(() => setIsContactModal(false), 1000);
    navigateAfter500ms(pathname);
  };

  const links = [
    {
      text: "About",
      onClick: () => !isAbout && handleNavigation("/portfolio/about"),
    },
    {
      text: "Project",
      onClick: () => !isProject && handleNavigation("/portfolio/project"),
    },
  ];

  return (
    <div className="fixed z-50 inset-0 w-full h-full">
      <Backdrop isVisible={isVisible} handleClose={handleClose} />
      <div
        className={`absolute bottom-0 w-full bg-primary text-black font-chosunilbo ${
          isVisible ? "animate-slideToTop" : "animate-slideToDown"
        }`}
      >
        <ul className="block lg:hidden">
          {links.map(({ text, onClick }, i) => (
            <>
              <li
                key={i}
                className="flex items-center justify-between px-[5%] py-5 transition-colors duration-300 hover:text-[#90999c] cursor-pointer"
                onClick={onClick}
              >
                <h3 className="text-3xl font-bold">{text}</h3>
                <GoArrowRight className="text-4xl" />
              </li>
              <hr className="w-full h-[2px] bg-[#b2bec3]" />
            </>
          ))}
        </ul>
        <AiOutlineClose
          className={`absolute -top-10 right-8 z-10 text-white lg:text-black lg:top-8 ${
            !isVisible ? "hidden lg:block" : ""
          } w-5 h-5 cursor-pointer`}
          onClick={handleClose}
        />
        <Footer />
      </div>
    </div>
  );
}

export default ContactModal;
