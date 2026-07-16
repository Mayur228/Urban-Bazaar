import { ArrowRight } from "lucide-react";
import { NewArrivalSlider } from "./components/NewArrivalSlider";

export function NewArrival() {
  return (
    <section className="py-10">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 flex items-end justify-between">

          <div>

            <span className="text-sm font-semibold uppercase tracking-[5px] text-amber-600">
              New Collection
            </span>

            <h2 className="mt-4 text-5xl font-bold">
              New Arrivals
            </h2>

            <p className="mt-5 max-w-xl text-lg text-gray-500">
              Discover the latest fashion trends
              carefully selected for you.
            </p>

          </div>

          <button className="group hidden items-center gap-2 rounded-full border px-6 py-3 font-semibold transition hover:bg-black hover:text-white lg:flex">

            View All

            <ArrowRight
              size={18}
              className="transition group-hover:translate-x-1"
            />

          </button>

        </div>

        <NewArrivalSlider />

      </div>

    </section>
  );
}