import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { toggleLoadingAtom } from "../libs/atoms";

const useNavigateWithLoading = () => {
  const [toggleLoading, setToggleLoading] = useRecoilState(toggleLoadingAtom);
  const navigate = useNavigate();

  const navigateAfter500ms = (pathname: string | number) => {
    if (toggleLoading) return;
    setToggleLoading(true);

    const navigateTimeout = setTimeout(() => {
      if (typeof pathname === "number") {
        navigate(pathname);
      } else {
        navigate(pathname);
      }
      window.scrollTo(0, 0);
    }, 500);
    const loadingTimeout = setTimeout(() => {
      setToggleLoading(false);
    }, 2000);

    return () => {
      clearTimeout(navigateTimeout);
      clearTimeout(loadingTimeout);
    };
  };

  return navigateAfter500ms;
};

export default useNavigateWithLoading;
