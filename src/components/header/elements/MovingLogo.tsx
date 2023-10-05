// import { useState } from "react";
import { center } from "../../../css/layout";

function MovingLogo() {
  // const [isScrolled, setIsScrolled] = useState(false);
  return (
    <div className="w-44 h-12 mr-[45%]">
      <div
        className={`${center} w-full h-full bg-black text-white text-2xl font-semibold rounded-md`}
      >
        JIHYEON
      </div>
    </div>
  );
}

export default MovingLogo;
