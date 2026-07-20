import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

import { customers } from "../data/customers";

import CustomerHeader from "../components/CustomerHeader";
import CustomerTabs from "../components/CustomerTabs";

import OverviewTab from "../components/OverviewTab";
import PurchaseHistoryTab from "../components/PurchaseHistoryTab";
import SupportTab from "../components/SupportTab";
import TagsTab from "../components/TagsTab";
import NotesTab from "../components/NotesTab";

const CustomerProfile = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [activeTab, setActiveTab] =
    useState("Overview");

  const customer = customers.find(
    (c) => c.id === Number(id)
  );

  if (!customer) {
    return (
      <div className="rounded-xl bg-white p-10 shadow">
        Customer not found.
      </div>
    );
  }

  return (
    <div className="space-y-6">

      <button
        onClick={() => navigate("/customers")}
        className="rounded-lg border px-4 py-2 hover:bg-slate-100"
      >
        ← Back to Customers
      </button>

      <CustomerHeader customer={customer} />

      <CustomerTabs
        activeTab={activeTab}
        onChange={setActiveTab}
      />

      {activeTab === "Overview" && (
        <OverviewTab customer={customer} />
      )}

      {activeTab === "Purchases" && (
        <PurchaseHistoryTab customer={customer} />
      )}

      {activeTab === "Support" && (
        <SupportTab customer={customer} />
      )}

      {activeTab === "Tags" && (
        <TagsTab customer={customer} />
      )}

      {activeTab === "Notes" && (
        <NotesTab customer={customer} />
      )}

    </div>
  );
};

export default CustomerProfile;