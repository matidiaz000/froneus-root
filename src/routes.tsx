import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const Home = lazy(() => import("home"));

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Navigate to="/inicio" />} />
      <Route element={<Home />} path="/inicio/*" />
    </Routes>
  );
};

export default AppRoutes;