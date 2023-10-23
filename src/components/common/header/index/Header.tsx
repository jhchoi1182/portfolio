import DarkmodeToggle from "../elements/DarkmodeToggle";
import Logo from "../elements/Logo";
import NavTab from "../elements/NavTab";

function Header() {
  return (
    <nav className="sticky top-0 flex items-center justify-between py-11 px-24 font-montserrat z-40">
      <Logo />
      <NavTab />
      <DarkmodeToggle />
    </nav>
  );
}

export default Header;
