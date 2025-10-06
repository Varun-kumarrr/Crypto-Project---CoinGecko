import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import CoinDetailsPage from "../../pages/CoinDetailsPage";
import MainLayout from "../../pages/Layout";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="details/:coinId" element={<CoinDetailsPage />} />
      </Route>
    </Routes>
  );
}

export default Routing;
