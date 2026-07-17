export function PriceFilter() {
  return (
    <div className="space-y-4">

      <input
        type="range"
        min={0}
        max={500}
        className="w-full accent-amber-600"
      />

      <div className="flex justify-between text-sm text-stone-600">
        <span>$0</span>
        <span>$500</span>
      </div>

    </div>
  );
}