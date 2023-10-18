import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/header/index/Header";
import About from "./pages/About";
import Project from "./pages/Project";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<About />} />
        <Route
          path={`${process.env.PUBLIC_URL}/project`}
          element={<Project />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
