import { motion } from "framer-motion";
import { HeroButtons } from "./HeroButtons";

export function HeroContent() {
  return (
    <div className="max-w-2xl">

      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: .2 }}
        className="inline-block rounded-full bg-amber-100 px-5 py-2 text-sm font-semibold text-amber-800"
      >
        New Collection 2026
      </motion.span>

      {/* <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: .4 }}
        className="mt-8 text-6xl font-black leading-tight text-gray-900 lg:text-8xl"
      >
        Elevate
        <br />

        Your
        <span className="block text-amber-600">
          Style.
        </span>
      </motion.h1> */}
          
          <h1 className="mt-8 text-7xl font-black leading-none lg:text-8xl">

    Elevate

    <span
        className="
        block
        bg-gradient-to-r
        from-amber-500
        via-orange-500
        to-pink-500
        bg-clip-text
        text-transparent">

        Your Style

    </span>

</h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: .6 }}
        className="mt-8 max-w-xl text-lg leading-8 text-gray-600"
      >
        Discover premium fashion, timeless essentials,
        and modern accessories crafted for people who
        appreciate quality and elegance.
      </motion.p>

      <HeroButtons />

      <div className="mt-16 flex gap-14">

        <div>
          <h2 className="text-4xl font-bold">15K+</h2>
          <p className="text-gray-500">Happy Customers</p>
        </div>

        <div>
          <h2 className="text-4xl font-bold">250+</h2>
          <p className="text-gray-500">Premium Brands</p>
        </div>

        <div>
          <h2 className="text-4xl font-bold">4.9★</h2>
          <p className="text-gray-500">Customer Rating</p>
        </div>

      </div>

    </div>
  );
}