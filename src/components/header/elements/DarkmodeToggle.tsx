import { useCookies } from "react-cookie";
import { FiCircle } from "react-icons/fi";

const oneWeekFromNow = new Date();
oneWeekFromNow.setDate(oneWeekFromNow.getDate() + 7);

function DarkmodeToggle() {
  const [{ JdarkMode }, setCookie, removeCookie] = useCookies(["JdarkMode"]);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    JdarkMode
      ? removeCookie("JdarkMode")
      : setCookie("JdarkMode", true, { path: "/", expires: oneWeekFromNow });
  };

  return (
    <button
      className="flex items-center gap-[5px] text-lg"
      onClick={toggleDarkMode}
    >
      <div className="flex flex-col h-7 overflow-hidden">
        <span
          className={`font-semibold slidingText ${JdarkMode ? "moveUp" : ""}`}
        >
          W
        </span>
        <span
          className={`font-semibold slidingText ${
            JdarkMode ? "moveUp" : "moveDown"
          }`}
        >
          B
        </span>
      </div>
      <FiCircle />
    </button>
  );
}

export default DarkmodeToggle;
