import { useState } from "react";
import { BsList } from "react-icons/bs";
import ContactModal from "../../../contactModal/index/ContactModal";
import DarkmodeToggle from "../elements/DarkmodeToggle";
import Logo from "../elements/Logo";
import NavTab from "../elements/NavTab";

function Header() {
  const [isContactModal, setIsContactModal] = useState(false);

  return (
    <>
      <nav className="fixed w-full top-0 flex items-center justify-between py-11 px-[5%] font-montserrat z-40">
        <Logo />
        <div className="lg:hidden">
          <NavTab setIsContactModal={setIsContactModal} />
        </div>
        <div className="-ml-[25%] xl:ml-0 lg:flex lg:w-full">
          <div className="flex lg:ml-auto">
            <DarkmodeToggle />
          </div>
          <BsList
            className="hidden lg:block ml-[5%] text-4xl cursor-pointer"
            onClick={() => setIsContactModal(true)}
          />
        </div>
      </nav>
      {isContactModal && <ContactModal setIsContactModal={setIsContactModal} />}
    </>
  );
}

export default Header;
