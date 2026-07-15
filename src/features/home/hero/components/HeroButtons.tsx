import { ArrowRight } from "lucide-react";

export function HeroButtons() {
  return (
    <div className="mt-10 flex gap-5">

      {/* <button className="group flex items-center gap-3 rounded-full bg-black px-8 py-4 font-semibold text-white transition hover:scale-105">

        Shop Now

        <ArrowRight
          className="transition group-hover:translate-x-1"
          size={20}
        />

      </button> */}
          
          <button
className="
group
relative
overflow-hidden
rounded-full
bg-black
px-9
py-5
font-semibold
text-white
transition-all
duration-300
hover:scale-105">

<span className="relative z-10 flex items-center gap-3">

Shop Now

<ArrowRight
size={20}
className="transition group-hover:translate-x-1"/>

</span>

<div
className="
absolute
left-0
top-0
h-full
w-0
bg-gradient-to-r
from-amber-500
to-orange-500
transition-all
duration-500
group-hover:w-full"/>

</button>

      <button className="rounded-full border border-gray-300 px-8 py-4 font-semibold transition hover:bg-gray-100">
        Explore Collection
      </button>

    </div>
  );
}