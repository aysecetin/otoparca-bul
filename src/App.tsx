import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import AdminPage from "./pages/AdminPage";
import DashboardPage from "./pages/DashboardPage";
import HomePage from "./pages/HomePage";
import JoinPage from "./pages/JoinPage";
import PartDetailPage from "./pages/PartDetailPage";
import PartSearchPage from "./pages/PartSearchPage";
import RequestsPage from "./pages/RequestsPage";
import SellerProfilePage from "./pages/SellerProfilePage";
import StocksPage from "./pages/StocksPage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/parca-ara" element={<PartSearchPage />} />
        <Route path="/parca/:id" element={<PartDetailPage />} />
        <Route path="/parcaci/:id" element={<SellerProfilePage />} />
        <Route path="/panel" element={<DashboardPage />} />
        <Route path="/panel/stoklar" element={<StocksPage />} />
        <Route path="/panel/talepler" element={<RequestsPage />} />
        <Route path="/parcaci-olarak-katil" element={<JoinPage />} />
        <Route path="/admin-demo" element={<AdminPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
