export function AuthDivider() {
  return (
    <div className="my-6 flex items-center">
      <div className="h-px flex-1 bg-stone-200" />

      <span className="px-4 text-sm text-stone-500">
        OR
      </span>

      <div className="h-px flex-1 bg-stone-200" />
    </div>
  );
}