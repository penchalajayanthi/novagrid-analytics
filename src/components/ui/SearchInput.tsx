import { FiSearch } from "react-icons/fi";

interface Props {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const SearchInput = ({
  value,
  onChange,
  placeholder,
}: Props) => {
  return (
    <div className="relative w-full">

      <FiSearch
        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        size={18}
      />

      <input
        type="text"
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
        placeholder={placeholder}
        className="
          h-11
          w-full
          rounded-xl
          border
          border-slate-200
          bg-white
          pl-11
          pr-4
          text-sm
          text-slate-700
          placeholder:text-slate-400
          outline-none
          transition
          focus:border-blue-500
          focus:ring-4
          focus:ring-blue-100
        "
      />

    </div>
  );
};

export default SearchInput;