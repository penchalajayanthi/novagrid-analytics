interface FilterSelectProps {
  value: string;
  options: string[];
  placeholder: string;
  onChange: (value: string) => void;
}

const FilterSelect = ({
  value,
  options,
  placeholder,
  onChange,
}: FilterSelectProps) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm shadow-sm outline-none transition focus:border-blue-500"
    >
      <option value="">{placeholder}</option>

      {options.map((option) => (
        <option
          key={option}
          value={option}
        >
          {option}
        </option>
      ))}
    </select>
  );
};

export default FilterSelect;