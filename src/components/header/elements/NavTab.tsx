import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";
import "../css/animation.css";

function NavTab() {
  return (
    <ul className="flex gap-10 text-lg">
      <li className="navHover">
        <Link to={"/"}>ABOUT</Link>
      </li>
      <li className="navHover">
        <Link to={"/"}>PROJECT</Link>
      </li>
      <li className="navHover">
        <Link to={"/"}>CONTACT</Link>
      </li>
      <li className="navHover">
        <Link to={"/"} className="flex items-center">
          <span>BLOG</span>
          <GoArrowUpRight className="liftOnHover" />
        </Link>
      </li>
      <li className="navHover">
        <Link to={"/"} className="flex items-center">
          <span>GITHUB</span>
          <GoArrowUpRight className="liftOnHover" />
        </Link>
      </li>
    </ul>
  );
}

export default NavTab;
