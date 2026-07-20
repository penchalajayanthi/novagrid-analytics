import { useState } from "react";
import { FiPlus, FiX } from "react-icons/fi";
import type { Customer } from "../types/customer.types";

interface Props {
  customer: Customer;
}

const availableTags = [
  "VIP",
  "Renewal",
  "Enterprise",
  "Priority",
  "New",
  "Upsell",
  "Support",
  "Premium",
];

const TagsTab = ({ customer }: Props) => {
  const [tags, setTags] = useState(customer.tags);
  const [selectedTag, setSelectedTag] = useState("");

  const addTag = () => {
    if (!selectedTag) return;

    if (tags.includes(selectedTag)) return;

    setTags([...tags, selectedTag]);
    setSelectedTag("");
  };

  const removeTag = (tag: string) => {
    setTags(tags.filter((t) => t !== tag));
  };

  return (
    <div className="space-y-6">

      {/* Current Tags */}

      <div className="rounded-2xl border bg-white p-6 shadow-sm">

        <h2 className="mb-6 text-xl font-semibold">
          Customer Tags
        </h2>

        <div className="flex flex-wrap gap-3">

          {tags.map((tag) => (

            <div
              key={tag}
              className="flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700"
            >
              {tag}

              <button
                onClick={() => removeTag(tag)}
                className="rounded-full hover:bg-blue-200 p-1"
              >
                <FiX size={14} />
              </button>

            </div>

          ))}

        </div>

      </div>

      {/* Add Tag */}

      <div className="rounded-2xl border bg-white p-6 shadow-sm">

        <h2 className="mb-6 text-xl font-semibold">
          Add Tag
        </h2>

        <div className="flex gap-4">

          <select
            value={selectedTag}
            onChange={(e) =>
              setSelectedTag(e.target.value)
            }
            className="flex-1 rounded-xl border px-4 py-3 outline-none focus:border-blue-500"
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
            onClick={addTag}
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700"
          >

            <FiPlus />

            Add Tag

          </button>

        </div>

      </div>

    </div>
  );
};

export default TagsTab;