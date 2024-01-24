import { BrowserRouter } from "react-router-dom";
import PortfolioRoutes from "./PortfolioRoutes";
import Header from "../components/common/header/index/Header";

function RootRouter() {
  return (
    <BrowserRouter>
      <Header />
      <PortfolioRoutes />
    </BrowserRouter>
  );
}

export default RootRouter;
