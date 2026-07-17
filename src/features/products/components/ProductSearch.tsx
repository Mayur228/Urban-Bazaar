import { Search } from "lucide-react";

interface ProductSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export function ProductSearch({
  value,
  onChange,
}: ProductSearchProps) {
  return (
    <div className="relative">
      <Search
        size={20}
        className="absolute left-5 top-1/2 -translate-y-1/2 text-stone-400"
      />

      <input
        type="text"
        value={value}
        placeholder="Search products..."
        onChange={(e) => onChange(e.target.value)}
        className="
          h-14
          w-full
          rounded-2xl
          border
          border-stone-200
          bg-white
          pl-14
          pr-5
          text-sm
          shadow-sm
          transition-all
          duration-300
          placeholder:text-stone-400
          focus:border-amber-500
          focus:ring-4
          focus:ring-amber-100
          focus:outline-none
        "
      />
    </div>
  );
}