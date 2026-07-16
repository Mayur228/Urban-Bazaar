import { motion } from "framer-motion";
import { reviews } from "./components/reviewData";
import { ReviewCard } from "./components/ReviewCard";

export function Reviews() {
  return (
    <section className="py-10">

      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="flex flex-col mb-16 text-center items-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[5px] text-amber-600">
            Testimonials
          </span>

          <h2 className="mt-5 text-5xl font-bold">
            What Our Customers Say
          </h2>

                  <div className="mt-4">
                      <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-500">
            Thousands of happy customers trust Urban Bazaar
            for premium quality and exceptional service.
          </p>

                  </div>
          
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {reviews.map((review) => (
            <ReviewCard
              key={review.id}
              review={review}
            />
          ))}

        </div>

      </div>

    </section>
  );
}