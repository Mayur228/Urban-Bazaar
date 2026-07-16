export function BackgroundGlow() {
  return (
    <>
      <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-amber-400/20 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-purple-500/20 blur-[150px]" />

      <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-500/20 blur-[140px]" />
    </>
  );
}