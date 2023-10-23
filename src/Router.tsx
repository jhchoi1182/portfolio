import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/common/index/Header";
import About from "./pages/About";
import Project from "./pages/Project";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={`/`} element={<About />} />
        <Route path={`/project`} element={<Project />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
