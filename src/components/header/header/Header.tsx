import DarkmodeToggle from "../elements/DarkmodeToggle";
import LogoEyes from "../elements/LogoEyes";
import NavTab from "../elements/NavTab";

function Header() {
  return (
    <nav className="sticky top-0 flex items-center py-11 px-24 font-montserrat">
      <LogoEyes />
      <NavTab />
      <DarkmodeToggle />
    </nav>
  );
}

export default Header;
