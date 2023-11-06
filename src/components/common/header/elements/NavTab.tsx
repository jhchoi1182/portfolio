import { GoArrowUpRight } from "react-icons/go";
import "../css/animation.css";
import useNavigateWithLoading from "../../../../hooks/useNavigateWithLoading";
import useRouteNavigate from "../../../../hooks/useRouteNavigation";

const textColor = "text-[#90999c] dark:text-[#b2bec3]";
const links = [
  {
    text: "BLOG",
    href: "https://jhchoi1182.tistory.com/",
  },
  {
    text: "GITHUB",
    href: "https://github.com/jhchoi1182",
  },
];

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
        <li className={`transition-navHover ${isAbout ? textColor : ""}`}>
          <button
            onClick={() => !isAbout && navigateAfter500ms("/portfolio/about")}
          >
            ABOUT
          </button>
        </li>
        <li className={`transition-navHover ${isProject ? textColor : ""}`}>
          <button
            onClick={() =>
              !isProject && navigateAfter500ms("/portfolio/project")
            }
          >
            PROJECT
          </button>
        </li>
        <li className="transition-navHover">
          <button onClick={() => setIsContactModal(true)}>CONTACT</button>
        </li>
        {links.map(({ text, href }, i) => (
          <li key={i} className="transition-navHover">
            <a
              href={href}
              rel="noopener noreferrer"
              target="_blank"
              className="flex items-center"
            >
              <span>{text}</span>
              <GoArrowUpRight className="transition-liftOnHover" />
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}

export default NavTab;
