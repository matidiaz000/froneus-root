import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const Home = lazy(() => import("home"));
const People = lazy(() => import("people"));

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Navigate to="/inicio" />} />
      <Route element={<Home />} path="/inicio/*" />
      <Route element={<People />} path="/personas/*" />
    </Routes>
  );
};

export default AppRoutes;