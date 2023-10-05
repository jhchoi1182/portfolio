import { FiCircle } from "react-icons/fi";

function DarkmodeToggle() {
  return (
    <button className="flex items-center ml-auto gap-[5px] text-lg">
      <span className="font-semibold">B</span>
      <FiCircle />
    </button>
  );
}

export default DarkmodeToggle;
