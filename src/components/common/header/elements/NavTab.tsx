import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";
import "../css/animation.css";
import ContactButton from "./ContactButton";

function NavTab() {
  return (
    <>
      <ul className="flex gap-10 text-lg">
        <li className="navHover">
          <Link to={"/"}>ABOUT</Link>
        </li>
        <li className="navHover">
          <Link to={"/"}>PROJECT</Link>
        </li>
        <ContactButton />
        <li className="navHover">
          <a
            href="https://jhchoi1182.tistory.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="flex items-center"
          >
            <span>BLOG</span>
            <GoArrowUpRight className="liftOnHover" />
          </a>
        </li>
        <li className="navHover">
          <a
            href="https://github.com/jhchoi1182"
            rel="noopener noreferrer"
            target="_blank"
            className="flex items-center"
          >
            <span>GITHUB</span>
            <GoArrowUpRight className="liftOnHover" />
          </a>
        </li>
      </ul>
    </>
  );
}

export default NavTab;
