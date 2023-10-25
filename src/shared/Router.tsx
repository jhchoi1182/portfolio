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
          <Route path="/" element={<Navigate to={`/about`} replace />} />
          <Route path={`/about`} element={<About />} />
          <Route path={`/project`} element={<Project />} />
          <Route path={`/project`}>
            <Route path={`:id`} element={<Detail />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
