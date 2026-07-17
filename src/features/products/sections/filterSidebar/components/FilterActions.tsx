interface Props {
  onClear?: () => void;
  onApply?: () => void;
}

export function FilterActions({
  onClear,
  onApply,
}: Props) {
  return (
    <div className="flex gap-3">

      <button
        onClick={onClear}
        className="
          flex-1
          rounded-xl
          border
          border-stone-300
          py-3
          transition
          hover:bg-stone-100
        "
      >
        Clear
      </button>

      <button
        onClick={onApply}
        className="
          flex-1
          rounded-xl
          bg-amber-600
          py-3
          font-medium
          text-white
          transition
          hover:bg-amber-700
        "
      >
        Apply
      </button>

    </div>
  );
}