import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";

import { employees } from "../data/employees";

import ProfileHeader from "../components/ProfileHeader";
import ProfileTabs from "../components/ProfileTabs";

import OverviewTab from "../components/OverviewTab";
import PerformanceTab from "../components/PerformanceTab";
import AttendanceTab from "../components/AttendanceTab";
import SalaryTab from "../components/SalaryTab";
import LeaveTab from "../components/LeaveTab";

const EmployeeProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] =
    useState("Overview");

  const employee = employees.find(
    (emp) => emp.id === Number(id)
  );

  if (!employee) {
    return (
      <div className="rounded-2xl border bg-white p-12 text-center shadow-sm">
        <h2 className="text-2xl font-bold text-slate-800">
          Employee Not Found
        </h2>

        <p className="mt-2 text-slate-500">
          The employee you are looking for doesn't
          exist.
        </p>

        <button
          onClick={() => navigate("/employees")}
          className="mt-6 rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
        >
          Back to Employees
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">

      {/* Back */}

      <button
        onClick={() => navigate("/employees")}
        className="flex items-center gap-2 rounded-lg border bg-white px-4 py-2 text-sm font-medium shadow-sm transition hover:bg-slate-50"
      >
        <FiArrowLeft />
        Back to Employees
      </button>

      {/* Profile */}

      <ProfileHeader employee={employee} />

      {/* Tabs */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <ProfileTabs
          activeTab={activeTab}
          onChange={setActiveTab}
        />

      </div>

      {/* Content */}

      <div className="rounded-2xl border bg-white p-6 shadow-sm">

        {activeTab === "Overview" && (
          <OverviewTab employee={employee} />
        )}

        {activeTab === "Performance" && (
          <PerformanceTab employee={employee} />
        )}

        {activeTab === "Attendance" && (
          <AttendanceTab employee={employee} />
        )}

        {activeTab === "Salary" && (
          <SalaryTab employee={employee} />
        )}

        {activeTab === "Leave" && (
          <LeaveTab employee={employee} />
        )}

      </div>

    </div>
  );
};

export default EmployeeProfile;