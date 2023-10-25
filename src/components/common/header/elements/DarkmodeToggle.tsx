import { useCookies } from "react-cookie";
import { FiCircle } from "react-icons/fi";
import { useSetRecoilState } from "recoil";
import { darkModeAtom } from "../../../../libs/atoms";

const oneWeekFromNow = new Date();
oneWeekFromNow.setDate(oneWeekFromNow.getDate() + 7);

function DarkmodeToggle() {
  const [{ JdarkMode }, setCookie, removeCookie] = useCookies(["JdarkMode"]);
  const setDarkMode = useSetRecoilState(darkModeAtom);
  console.log(JdarkMode);
  const toggleDarkMode = () => {
    JdarkMode
      ? removeCookie("JdarkMode", { path: "/" })
      : setCookie("JdarkMode", true, {
          path: "/",
          expires: oneWeekFromNow,
        });
    document.documentElement.classList.toggle("dark");
    setDarkMode((prev) => (prev ? false : true));
  };

  return (
    <button
      className="flex items-center gap-[5px] text-lg -ml-[25%]"
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
