import Contents from "../components/detail/index/Contents";
import MetaInfo from "../components/detail/index/MetaInfo";

function Detail() {
  return (
    <div className="relative z-30 px-[5%] overflow-visible">
      <div className="flex w-full min-h-screen">
        <MetaInfo />
        <Contents />
      </div>
    </div>
  );
}

export default Detail;
