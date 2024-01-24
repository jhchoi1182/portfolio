import { BrowserRouter } from "react-router-dom";
import Context from "./Context";
import Header from "../components/common/header/index/Header";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Context />
    </BrowserRouter>
  );
}

export default Router;
