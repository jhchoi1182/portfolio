import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/header/index/Header";
import Home from "./pages/Home";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
