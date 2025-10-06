import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import CoinDetailsPage from "../../pages/CoinDetailsPage";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/details/:coinId" element={<CoinDetailsPage />} />
    </Routes>
  );
}

export default Routing;
