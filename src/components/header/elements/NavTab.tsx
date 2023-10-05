import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";

function NavTab() {
  return (
    <ul className="flex gap-10 text-lg">
      <li>
        <Link to={"/"}>ABOUT</Link>
      </li>
      <li>
        <Link to={"/"}>PROJECT</Link>
      </li>
      <li>
        <Link to={"/"}>CONTACT</Link>
      </li>
      <li>
        <Link to={"/"} className="flex items-center">
          <span>BLOG</span>
          <GoArrowUpRight />
        </Link>
      </li>
      <li>
        <Link to={"/"} className="flex items-center">
          <span>GITHUB</span>
          <GoArrowUpRight />
        </Link>
      </li>
    </ul>
  );
}

export default NavTab;
