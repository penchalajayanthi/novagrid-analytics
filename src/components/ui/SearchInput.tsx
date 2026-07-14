import { FiSearch } from "react-icons/fi";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const SearchInput = ({
  value,
  onChange,
  placeholder = "Search...",
}: SearchInputProps) => {
  return (
    <div className="relative w-full">
      <FiSearch
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        size={18}
      />

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-4 outline-none transition focus:border-blue-500"
      />
    </div>
  );
};

export default SearchInput;