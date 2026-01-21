import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import PublicLayout from "../components/layout/PublicLayout";
import PrivateLayout from "../components/layout/PrivateLayout";

const Login = lazy(() => import('../pages/login/Login'));
const Dashboard = lazy(() => import("../pages/dashboard/Dashboard"));

export default function AppRoutes() {
  return (
    <Suspense fallback={<div className="p-6 text-center">Loading page...</div>}>
      <Routes>
        {/* Public routes */}
        <Route element={<PublicLayout />}>
          <Route path="/login" element={<Login />} />
        </Route>

        {/* Private routes */}
        <Route element={<PrivateLayout />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
