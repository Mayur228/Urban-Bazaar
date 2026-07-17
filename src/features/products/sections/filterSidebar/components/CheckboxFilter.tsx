interface Props {
  items: string[];
}

export function CheckboxFilter({
  items,
}: Props) {
  return (
    <div className="space-y-3">

      {items.map((item) => (
        <label
          key={item}
          className="flex cursor-pointer items-center gap-3"
        >
          <input
            type="checkbox"
            className="
              h-4
              w-4
              rounded
              border-stone-300
              text-amber-600
              focus:ring-amber-500
            "
          />

          <span className="text-sm text-stone-700">
            {item}
          </span>

        </label>
      ))}

    </div>
  );
}