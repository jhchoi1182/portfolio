import { center } from "../../../styles/layout";
import Developer from "../elements/Developer";
import End from "../elements/End";
import Front from "../elements/Front";

function Banner() {
  return (
    <div
      className={`${center} flex-col h-screen -mt-[4%] mb-[4%] select-none font-notoSans`}
    >
      <Front />
      <End />
      <Developer />
    </div>
  );
}

export default Banner;
