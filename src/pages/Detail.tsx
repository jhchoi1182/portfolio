import Contents from "../components/detail/index/Contents";
import MetaInfo from "../components/detail/index/MetaInfo";
import More from "../components/detail/index/More";

function Detail() {
  return (
    <div className="relative z-30 w-full">
      <div className="flex w-full min-h-screen px-[5%]">
        <MetaInfo />
        <Contents />
      </div>
      <hr className="w-full h-[2px] my-36 bg-gray-300 dark:bg-zinc-900" />
      <div className="px-[5%]">
        <More />
      </div>
    </div>
  );
}

export default Detail;
