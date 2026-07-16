import { motion } from "framer-motion";
import { FeatureCard } from "./components/FeatureCard";
import { features } from "./components/featureData";

export function UrbanFeatures() {
  return (
    <section className="py-10">

      <div className="flex flex-col mx-auto max-w-7xl px-6 items-center">

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
          className="mb-16 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[4px] text-amber-600">
            Why Choose Us
          </span>

          <h2 className="mt-5 text-5xl font-bold">
            Shop With Confidence
          </h2>

                  <div className="mt-4">
                       <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-500">
            We provide a premium shopping experience with
            secure payments, fast delivery and carefully
            curated collections.
          </p>
                  </div>
         
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              Icon={feature.icon}
            />
          ))}

        </div>

      </div>

    </section>
  );
}