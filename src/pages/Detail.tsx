import ToTopButton from "../components/detail/elements/ToTopButton";
import Contents from "../components/detail/index/Contents";
import MetaInfo from "../components/detail/index/MetaInfo";
import More from "../components/detail/index/More";
import { REACTIVE_COLOR } from "../styles/colors";

function Detail() {
  return (
    <div className="relative z-30 w-full">
      <div className="w-full min-h-screen px-[5%] lg:flex">
        <MetaInfo />
        <Contents />
      </div>
      <hr className={`w-full h-[2px] my-36 ${REACTIVE_COLOR.primaryLine}`} />
      <div className="px-[5%]">
        <More />
      </div>
      <ToTopButton />
    </div>
  );
}

export default Detail;
