import { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import "../css/animation.css";
import ContactButton from "./ContactButton";
import UnmountLoading from "../../index/UnmountLoading";

function NavTab() {
  const [toggleLoading, setToggleLoading] = useState(false);
  const navigate = useNavigate();

  const navigateAfterLoaidng = (pathname: string) => {
    setToggleLoading((prev) => !prev);
    const timeout = setTimeout(() => {
      setToggleLoading((prev) => !prev);
      navigate(pathname);
    }, 1500);

    return () => clearTimeout(timeout);
  };

  return (
    <>
      <ul className="flex gap-10 text-lg">
        <li className="navHover">
          <button onClick={() => navigateAfterLoaidng("/")}>ABOUT</button>
        </li>
        <li className="navHover">
          <button onClick={() => navigateAfterLoaidng("/project")}>
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
      {toggleLoading && <UnmountLoading />}
    </>
  );
}

export default NavTab;
