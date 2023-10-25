import { GoArrowUpRight } from "react-icons/go";
import "../css/animation.css";
import ContactButton from "./ContactButton";
import useNavigateWithLoading from "../../../../hooks/useNavigateWithLoading";

function NavTab() {
  const navigateAfter500ms = useNavigateWithLoading();
  return (
    <>
      <ul className="flex gap-10 text-lg">
        <li className="navHover">
          <button onClick={() => navigateAfter500ms("/portfolio/about")}>
            ABOUT
          </button>
        </li>
        <li className="navHover">
          <button onClick={() => navigateAfter500ms("/portfolio/project")}>
            PROJECT
          </button>
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
