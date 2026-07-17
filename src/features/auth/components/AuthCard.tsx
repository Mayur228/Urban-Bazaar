import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function AuthCard({ children }: Props) {
  return (
    <div
      className="
      w-full
      max-w-md
      rounded-3xl
      border
      border-stone-200
      bg-white
      p-10
      shadow-xl
      "
    >
      {children}
    </div>
  );
}