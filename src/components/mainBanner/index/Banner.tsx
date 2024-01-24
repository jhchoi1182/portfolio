import { center } from "../../../styles/classNames";
import Developer from "../elements/Developer";
import Full from "../elements/Full";
import Stack from "../elements/Stack";

function Banner() {
  return (
    <div className={`${center} flex-col h-screen -mt-[4%] mb-[4%] font-notoSans`}>
      <Full />
      <Stack />
      <Developer />
    </div>
  );
}

export default Banner;
