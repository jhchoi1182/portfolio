import { useRef, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Loading from "../components/common/Loading";
import useDelayedRouting from "../hooks/useDelayedRouting";
import About from "../pages/About";
import Detail from "../pages/Detail";
import Project from "../pages/Project";

function PortfolioRoutes() {
  const [toggleLoading, setToggleLoading] = useState(false);
  const [shouldRoute, setShouldRoute] = useState(false);
  const location = useLocation();
  const currentLocation = useRef(location);

  useDelayedRouting(
    toggleLoading,
    setToggleLoading,
    setShouldRoute,
    currentLocation,
  );

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

export default PortfolioRoutes;
