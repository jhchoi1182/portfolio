import { BsList } from "react-icons/bs";
import DarkmodeToggle from "../elements/DarkmodeToggle";
import Logo from "../elements/Logo";
import NavTab from "../elements/NavTab";

function Header() {
  return (
    <>
      <nav className="fixed w-full top-0 flex items-center justify-between py-11 px-[5%] font-montserrat z-40">
        <Logo />
        <div className="lg:hidden">
          <NavTab />
        </div>
        <div className="lg:hidden -ml-[25%] xl:ml-0">
          <DarkmodeToggle />
        </div>
        <div className="hidden lg:flex">
          <BsList className="text-4xl cursor-pointer" />
        </div>
      </nav>
    </>
  );
}

export default Header;
