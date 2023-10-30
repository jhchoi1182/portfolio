import { center } from "../../../styles/classNames";
import Developer from "../elements/Developer";
import End from "../elements/End";
import Front from "../elements/Front";

function Banner() {
  return (
    <div
      className={`${center} flex-col h-screen -mt-[4%] mb-[4%] font-notoSans bg-teal-500`}
    >
      <Front />
      <End />
      <Developer />
    </div>
  );
}

export default Banner;
