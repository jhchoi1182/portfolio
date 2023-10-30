import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";
import Loading from "../components/common/Loading";
import useNavigateWithLoading from "../hooks/useNavigateWithLoading";
import { toggleLoadingAtom } from "../libs/atoms";

function Context() {
  const toggleLoading = useRecoilValue(toggleLoadingAtom);

  const navigateAfter500ms = useNavigateWithLoading();

  useEffect(() => {
    const handlePopState = () => {
      navigateAfter500ms(-1);
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

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
