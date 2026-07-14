import { Outlet } from "react-router-dom";
import { Navbar, Sidebar } from "../components/layout";

const DashboardLayout = () => {
  return (
    <div className="h-screen bg-slate-100">
      {/* Fixed Sidebar */}
      <Sidebar />

      {/* Right Side */}
      <div className="ml-64 flex h-screen flex-col">
        {/* Fixed Navbar */}
        <Navbar />

        {/* Scrollable Content */}
        <main className="mt-16 flex-1 overflow-y-auto bg-slate-100 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;