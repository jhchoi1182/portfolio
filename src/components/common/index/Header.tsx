import DarkmodeToggle from "../header/elements/DarkmodeToggle";
import Logo from "../header/elements/Logo";
import NavTab from "../header/elements/NavTab";

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
