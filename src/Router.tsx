import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/header/index/Header";
import About from "./pages/About";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
