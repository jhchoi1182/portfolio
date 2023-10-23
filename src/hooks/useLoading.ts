import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { toggleLoadingAtom } from "../libs/atoms";

const useLoading = () => {
  const setToggleLoading = useSetRecoilState(toggleLoadingAtom);
  const navigate = useNavigate();

  const startLoadingAfterNavigation = (pathname: string) => {
    setToggleLoading((prev) => !prev);

    const navigateTimeout = setTimeout(() => {
      navigate(pathname);
    }, 1500);

    const loadingTimeout = setTimeout(() => {
      setToggleLoading(false);
    }, 3000);

    return () => {
      clearTimeout(navigateTimeout);
      clearTimeout(loadingTimeout);
    };
  };

  return { startLoadingAfterNavigation };
};

export default useLoading;
