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
      <span className="font-semibold">B</span>
      <FiCircle />
    </button>
  );
}

export default DarkmodeToggle;
