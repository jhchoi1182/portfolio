import { useState, useEffect } from "react";
import { GoArrowUpRight } from "react-icons/go";
import "../css/animation.css";
import { useLocation } from "react-router-dom";
import ContactButton from "./ContactButton";
import useNavigateWithLoading from "../../../../hooks/useNavigateWithLoading";

const textColor = "text-[#90999c] dark:text-[#b2bec3]";

function NavTab() {
  const [currentPath, setCurrentPath] = useState("about");
  const { pathname } = useLocation();

  const navigateAfter500ms = useNavigateWithLoading();

  const isAbout = currentPath === "about";
  const isProject = currentPath === "project";

  useEffect(() => {
    if (pathname === "/portfolio/about") return setCurrentPath("about");
    if (pathname.startsWith("/portfolio/project"))
      return setCurrentPath("project");
  }, [pathname]);

  return (
    <>
      <ul className="flex gap-10 text-lg">
        <li className={`navHover ${isAbout ? textColor : ""}`}>
          <button
            onClick={() => !isAbout && navigateAfter500ms("/portfolio/about")}
          >
            ABOUT
          </button>
        </li>
        <li className={`navHover ${isProject ? textColor : ""}`}>
          <button
            onClick={() =>
              !isProject && navigateAfter500ms("/portfolio/project")
            }
          >
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
