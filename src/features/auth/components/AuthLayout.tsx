import type { ReactNode } from "react";
import { AuthBanner } from "./AuthBanner";

interface Props {
  children: ReactNode;
}

export function AuthLayout({ children }: Props) {
  return (
    <section className="min-h-screen bg-stone-50">
      <div className="mx-auto grid min-h-screen max-w-7xl lg:grid-cols-2">

        <AuthBanner />

        <div className="flex items-center justify-center px-6 py-10">
          {children}
        </div>

      </div>
    </section>
  );
}