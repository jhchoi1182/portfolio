import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useRecoilValue } from "recoil";
import Header from "./components/common/header/index/Header";
import Loading from "./components/common/Loading";
import { toggleLoadingAtom } from "./libs/atoms";
import About from "./pages/About";
import Detail from "./pages/Detail";
import Project from "./pages/Project";

function Router() {
  const toggleLoading = useRecoilValue(toggleLoadingAtom);

  return (
    <BrowserRouter>
      {toggleLoading && <Loading />}
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to={`/about`} replace />} />
        <Route path={`/about`} element={<About />} />
        <Route path={`/project`} element={<Project />} />
        <Route path={`/project`}>
          <Route path={`:id`} element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
