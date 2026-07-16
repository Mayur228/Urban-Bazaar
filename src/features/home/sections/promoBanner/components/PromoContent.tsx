import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function PromoContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: .7 }}
      viewport={{ once: true }}
    >
      <span className="rounded-full bg-white/10 px-5 py-2 text-sm font-semibold tracking-[3px] text-amber-400 backdrop-blur">
        NEW SEASON • SUMMER 2026
      </span>

      <h2 className="mt-8 text-5xl font-black leading-tight text-white lg:text-6xl">
        Elevate
        <br />
        Your Everyday
        <span className="block text-amber-400">
          Style.
        </span>
      </h2>

      <p className="mt-8 max-w-lg text-lg leading-8 text-zinc-300">
        Discover premium collections crafted with timeless
        elegance and modern comfort. Designed for every
        occasion and every lifestyle.
      </p>

      <div className="mt-10 flex flex-wrap gap-5">

        <button className="group flex items-center gap-3 rounded-full bg-amber-500 px-8 py-4 font-semibold text-black transition hover:scale-105">

          Shop Collection

          <ArrowRight
            size={20}
            className="transition group-hover:translate-x-1"
          />

        </button>

        <button className="rounded-full border border-white/20 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-black">
          Explore More
        </button>

      </div>

    </motion.div>
  );
}