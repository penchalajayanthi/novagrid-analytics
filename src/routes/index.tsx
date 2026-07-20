import { Route, Routes } from "react-router-dom";

import DashboardLayout from "../layouts/DashboardLayout";
import DashboardPage from "../features/dashboard/pages/Dashboard";

import AuthLayout from "../layouts/AuthLayout";

import LoginPage from "../features/auth/pages/LoginPage";
import RegisterPage from "../features/auth/pages/RegisterPage";
import ForgotPasswordPage from "../features/auth/pages/ForgotPasswordPage";
import OtpVerificationPage from "../features/auth/pages/OtpVerificationPage";
import ResetPasswordPage from "../features/auth/pages/ResetPasswordPage";

import RequireAuth from "./RequireAuth";
import GuestGuard from "./GuestGuard";

import EmployeesPage from "../features/employees/pages/Employees";
import ProjectsPage from "../features/projects/pages/Projects";
import CustomersPage from "../features/customers/pages/Customers";
import ReportsPage from "../features/reports/pages/Reports";
import SettingsPage from "../features/settings/pages/Settings";

import EmployeeProfile from "../features/employees/pages/EmployeeProfile";
import CustomerProfile from "../features/customers/pages/CustomerProfile";
import ProjectProfile from "../features/projects/pages/ProjectProfile";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Authentication */}

      <Route
        element={
          <GuestGuard>
            <AuthLayout />
          </GuestGuard>
        }
      >
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/forgot-password"
          element={<ForgotPasswordPage />}
        />
        <Route
          path="/otp"
          element={<OtpVerificationPage />}
        />
        <Route
          path="/reset-password"
          element={<ResetPasswordPage />}
        />
      </Route>

      {/* Protected Routes */}

      <Route
        path="/"
        element={
          <RequireAuth>
            <DashboardLayout />
          </RequireAuth>
        }
      >
        <Route index element={<DashboardPage />} />
        <Route path="employees" element={<EmployeesPage />} />

        <Route
          path="employees/:id"
          element={<EmployeeProfile />}
        />

        <Route path="customers" element={<CustomersPage />} />
        <Route
          path="customers/:id"
          element={<CustomerProfile />}
        />
        <Route path="projects" element={<ProjectsPage />} />
        <Route
  path="projects/:id"
  element={<ProjectProfile />}
/>

        <Route path="reports" element={<ReportsPage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>


    </Routes>
  );
};

export default AppRoutes;