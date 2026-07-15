import { FloatingBlob } from "./FloatingBlob";

export function BackgroundEffects() {
  return (
    <>
      <FloatingBlob
        duration={8}
        className="
        absolute
        left-10
        top-20
        h-72
        w-72
        rounded-full
        bg-blue-400/20
        blur-[120px]"
      />

      <FloatingBlob
        duration={12}
        className="
        absolute
        right-0
        top-32
        h-[500px]
        w-[500px]
        rounded-full
        bg-pink-400/20
        blur-[160px]"
      />

      <FloatingBlob
        duration={10}
        className="
        absolute
        bottom-0
        left-1/2
        h-80
        w-80
        -translate-x-1/2
        rounded-full
        bg-amber-300/20
        blur-[150px]"
      />
    </>
  );
}