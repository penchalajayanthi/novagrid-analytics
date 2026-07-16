import { FiChevronDown } from "react-icons/fi";

interface Props {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder: string;
}

const FilterSelect = ({
  value,
  onChange,
  options,
  placeholder,
}: Props) => {
  return (
    <div className="relative w-full">

      <select
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
        className="
          h-11
          w-full
          appearance-none
          rounded-xl
          border
          border-slate-200
          bg-white
          px-4
          pr-10
          text-sm
          text-slate-700
          outline-none
          transition
          focus:border-blue-500
          focus:ring-4
          focus:ring-blue-100
        "
      >
        <option value="">
          {placeholder}
        </option>

        {options.map((option) => (
          <option
            key={option}
            value={option}
          >
            {option}
          </option>
        ))}
      </select>

      <FiChevronDown
        size={18}
        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-500"
      />

    </div>
  );
};

export default FilterSelect;