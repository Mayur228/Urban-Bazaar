import { X } from "lucide-react";

interface Props {
  onClose: () => void;
}

export function SearchBar({ onClose }: Props) {
  return (
    <div className="flex items-center gap-2 rounded-xl border border-border bg-surface px-3 py-2 shadow-md">
      <input
        autoFocus
        type="text"
        placeholder="Search products..."
        className="w-52 bg-transparent text-sm text-text-primary placeholder:text-text-secondary focus:outline-none lg:w-72"
      />

      <button
        type="button"
        onClick={onClose}
        aria-label="Close search"
        className="rounded-lg p-2 text-text-secondary transition-colors duration-300 hover:bg-primary hover:text-white"
      >
        <X size={18} />
      </button>
    </div>
  );
}