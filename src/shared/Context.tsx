import { Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";
import Loading from "../components/common/Loading";
import { toggleLoadingAtom } from "../libs/atoms";

function Context() {
  const toggleLoading = useRecoilValue(toggleLoadingAtom);

  return (
    <>
      {toggleLoading && <Loading />}
      <div className={toggleLoading ? "relative z-30 fadeOutInLoading" : ""}>
        <Outlet />
      </div>
    </>
  );
}

export default Context;
