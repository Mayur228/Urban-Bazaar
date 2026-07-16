import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProductCard } from "../../../../../common/productCard/components/ProductCard";
import { newArrivals } from "./newArrivalData";

export function NewArrivalSlider() {
  const [index, setIndex] = useState(0);

  const productsPerSlide = 4;

  const totalSlides = Math.ceil(
    newArrivals.length / productsPerSlide
  );

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(timer);
  }, [index]);

  function nextSlide() {
    setIndex((prev) =>
      prev === totalSlides - 1 ? 0 : prev + 1
    );
  }

  function previousSlide() {
    setIndex((prev) =>
      prev === 0 ? totalSlides - 1 : prev - 1
    );
  }

  const visibleProducts = newArrivals.slice(
    index * productsPerSlide,
    index * productsPerSlide + productsPerSlide
  );

  return (
    <div className="relative">

      {/* Navigation */}

      <button
        onClick={previousSlide}
        className="absolute left-0 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 rounded-full border bg-white p-3 shadow-lg transition hover:bg-black hover:text-white"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 z-20 translate-x-1/2 -translate-y-1/2 rounded-full border bg-white p-3 shadow-lg transition hover:bg-black hover:text-white"
      >
        <ChevronRight />
      </button>

      {/* Products */}

      <AnimatePresence mode="wait">

        <motion.div
          key={index}
          initial={{
            opacity: 0,
            x: 60,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          exit={{
            opacity: 0,
            x: -60,
          }}
          transition={{
            duration: .5,
          }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {visibleProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </motion.div>

      </AnimatePresence>

      {/* Pagination */}

      <div className="mt-10 flex justify-center gap-3">

        {Array.from({
          length: totalSlides,
        }).map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-3 rounded-full transition-all ${
              i === index
                ? "w-8 bg-black"
                : "w-3 bg-gray-300"
            }`}
          />
        ))}

      </div>

    </div>
  );
}