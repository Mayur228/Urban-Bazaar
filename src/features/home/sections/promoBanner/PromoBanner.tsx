import { BackgroundGlow } from "./components/BackgroundGlow";
import { PromoContent } from "./components/PromoContent";
import { PromoImage } from "./components/PromoImage";

export function PromoBanner() {
  return (
    <section className="py-10">

      <div className="mx-auto max-w-7xl px-6">

        <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-black via-zinc-900 to-zinc-800">

          <BackgroundGlow />

          <div className="grid items-center gap-10 px-10 py-14 lg:grid-cols-2 lg:px-16">

            <PromoContent />

            <PromoImage />

          </div>

        </div>

      </div>

    </section>
  );
}