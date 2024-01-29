import { useEffect } from "react";
import { Location, useLocation } from "react-router-dom";

type SetStateBoolean = React.Dispatch<React.SetStateAction<boolean>>;

const useDelayedRouting = (
  toggleLoading: boolean,
  setToggleLoading: SetStateBoolean,
  setShouldRoute: SetStateBoolean,
  currentLocation: React.MutableRefObject<Location<unknown>>,
) => {
  window.history.scrollRestoration = "manual";
  const location = useLocation();

  useEffect(() => {
    if (location === currentLocation.current || toggleLoading) return;
    setToggleLoading(true);

    const goRoutingTimeout = setTimeout(() => {
      currentLocation.current = location;
      setShouldRoute(true);
    }, 1000);
    const loadingTimeout = setTimeout(() => {
      setToggleLoading(false);
      setShouldRoute(false);
    }, 2000);

    return () => {
      clearTimeout(goRoutingTimeout);
      clearTimeout(loadingTimeout);
    };
  }, [location]);
};

export default useDelayedRouting;
