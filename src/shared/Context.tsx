import { useEffect, useRef, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Loading from "../components/common/Loading";
import About from "../pages/About";
import Detail from "../pages/Detail";
import Project from "../pages/Project";

function Context() {
  const [toggleLoading, setToggleLoading] = useState(false);
  const [shouldRoute, setShouldRoute] = useState(false);
  const location = useLocation();
  const currentLocation = useRef(location);

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    if (location === currentLocation.current || toggleLoading) return;
    setToggleLoading(true);
    const goRouting = setTimeout(() => {
      currentLocation.current = location;
      setShouldRoute(true);
    }, 1000);
    const loadingTimeout = setTimeout(() => {
      setToggleLoading(false);
      setShouldRoute(false);
    }, 2000);

    return () => {
      clearTimeout(goRouting);
      clearTimeout(loadingTimeout);
    };
  }, [location]);

  return (
    <>
      {toggleLoading && <Loading />}
      <div
        className={
          toggleLoading ? "relative z-30 animate-fadeOutInLoading" : ""
        }
      >
        <Routes location={shouldRoute ? location : currentLocation.current}>
          <Route
            path="/portfolio"
            element={<Navigate to={`/portfolio/about`} replace />}
          />
          <Route path={`/portfolio/about`} element={<About />} />
          <Route path={`/portfolio/project`} element={<Project />} />
          <Route path={`/portfolio/project`}>
            <Route path={`:id`} element={<Detail />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default Context;
