import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const useRouteNavigation = () => {
  const [currentPath, setCurrentPath] = useState("about");
  const { pathname } = useLocation();

  const isAbout = currentPath === "about";
  const isProject = currentPath === "project";

  useEffect(() => {
    if (pathname === "/portfolio/about") return setCurrentPath("about");
    if (pathname.startsWith("/portfolio/project"))
      return setCurrentPath("project");
  }, [pathname]);
  return { isAbout, isProject };
};

export default useRouteNavigation;
