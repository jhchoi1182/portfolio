import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Context from "./Context";
import Header from "../components/common/header/index/Header";
import About from "../pages/About";
import Detail from "../pages/Detail";
import Project from "../pages/Project";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<Context />}>
          <Route
            path="/portfolio"
            element={<Navigate to={`/portfolio/about`} replace />}
          />
          <Route path={`/portfolio/about`} element={<About />} />
          <Route path={`/portfolio/project`} element={<Project />} />
          <Route path={`/portfolio/project`}>
            <Route path={`:id`} element={<Detail />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
