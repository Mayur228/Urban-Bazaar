import { SlidersHorizontal } from "lucide-react";

interface Props {
  total: number;
  onOpenFilters: () => void;
}

export function ProductToolbar({
  total,
  onOpenFilters,
}: Props) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4">

      <button
        onClick={onOpenFilters}
        className="
          flex
          items-center
          gap-2
          rounded-xl
          border
          border-stone-300
          bg-white
          px-5
          py-3
          transition-all
          duration-300
          hover:border-amber-500
          hover:bg-amber-50
        "
      >
        <SlidersHorizontal size={18} />
        Filters
      </button>

      <p className="text-sm text-stone-500">
        Showing <span className="font-semibold">{total}</span> products
      </p>

      <select
        className="
          rounded-xl
          border
          border-stone-300
          px-4
          py-3
          focus:border-amber-500
          focus:outline-none
        "
      >
        <option>Newest</option>
        <option>Price Low → High</option>
        <option>Price High → Low</option>
        <option>Top Rated</option>
      </select>

    </div>
  );
}