import { GoArrowUpRight } from "react-icons/go";
import "../css/animation.css";
import useNavigateWithLoading from "../../../../hooks/useNavigateWithLoading";
import useRouteNavigate from "../../../../hooks/useRouteNavigation";

const textColor = "text-[#90999c] dark:text-[#b2bec3]";

function NavTab({
  setIsContactModal,
}: {
  setIsContactModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { isAbout, isProject } = useRouteNavigate();
  const navigateAfter500ms = useNavigateWithLoading();

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
        <li className="navHover">
          <button onClick={() => setIsContactModal(true)}>CONTACT</button>
        </li>
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
