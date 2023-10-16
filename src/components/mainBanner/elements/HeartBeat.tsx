import { useRecoilValue } from "recoil";
import heartBeatDark from "../../../../public/heartBeat_dark.webp";
import heartBeatLight from "../../../../public/heartBeat_light.webp";
import { darkModeAtom } from "../../../libs/atoms";

const HeartBeat = () => {
  const isDark = useRecoilValue(darkModeAtom);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <img src={isDark ? heartBeatDark : heartBeatLight} alt="심장박동" />
      <div className="absolute top-0 w-[200px] h-full shadow-lightWindow dark:shadow-darkWindow heartbeat"></div>
    </div>
  );
};

export default HeartBeat;
