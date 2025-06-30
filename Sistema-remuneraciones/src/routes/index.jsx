import React from "react";
import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import LoginPage from "../slices/auth/pages/LoginPage";
import DashboardPage from "../slices/dashboard/pages/DashboardPage";
import EmployeesPage from "../slices/employees/pages/EmployeesPage";
import PagarEmpleadosPage from "../slices/employees/pages/PagarEmpleadosPage"; // <-- import your new page

function ProtectedRoute() {
  const token = localStorage.getItem("token");
  if (!token) return <Navigate to="/login" replace />;
  return <Outlet />;
}

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/empleados" element={<EmployeesPage />} />
          <Route path="/pagar-empleados" element={<PagarEmpleadosPage />} /> {/* <-- add this line */}
        </Route>
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
