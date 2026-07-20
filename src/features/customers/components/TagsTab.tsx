import { useState } from "react";
import { FiPlus, FiX } from "react-icons/fi";
import type { Customer } from "../types/customer.types";
import { useCustomerStore } from "../store/customerStore";

interface Props {
  customer: Customer;
}

const availableTags = [
  "VIP",
  "Premium",
  "Renewal",
  "Priority",
  "Enterprise",
  "Support",
];

const TagsTab = ({ customer }: Props) => {
  const { customers, addTag, removeTag } =
    useCustomerStore();

  const currentCustomer =
    customers.find((c) => c.id === customer.id) ??
    customer;

  const [selectedTag, setSelectedTag] =
    useState("");

  return (
    <div className="space-y-6">

      <div className="rounded-2xl border bg-white p-6 shadow-sm">

        <h2 className="mb-5 text-xl font-semibold">
          Customer Tags
        </h2>

        <div className="flex flex-wrap gap-3">

          {currentCustomer.tags.map((tag) => (

            <span
              key={tag}
              className="flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-blue-700"
            >
              {tag}

              <button
                onClick={() =>
                  removeTag(customer.id, tag)
                }
              >
                <FiX />
              </button>

            </span>

          ))}

        </div>

      </div>

      <div className="rounded-2xl border bg-white p-6 shadow-sm">

        <div className="flex gap-3">

          <select
            value={selectedTag}
            onChange={(e) =>
              setSelectedTag(e.target.value)
            }
            className="flex-1 rounded-xl border p-3"
          >

            <option value="">
              Select Tag
            </option>

            {availableTags.map((tag) => (

              <option key={tag}>
                {tag}
              </option>

            ))}

          </select>

          <button
            onClick={() => {
              if (!selectedTag) return;

              addTag(customer.id, selectedTag);

              setSelectedTag("");
            }}
            className="rounded-xl bg-blue-600 px-5 text-white"
          >
            <FiPlus />
          </button>

        </div>

      </div>

    </div>
  );
};

export default TagsTab;