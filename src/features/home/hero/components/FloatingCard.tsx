import { Star } from "lucide-react";
import { motion } from "framer-motion";

type Props = {
  title: string;
  price: string;
};

export function FloatingCard({
  title,
  price,
}: Props) {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 4,
      }}
      className="rounded-3xl border border-white/50 bg-white/80 p-5 shadow-2xl backdrop-blur-xl"
    >
      <div className="flex gap-1 text-amber-400">
        <Star size={15} fill="currentColor" />
        <Star size={15} fill="currentColor" />
        <Star size={15} fill="currentColor" />
        <Star size={15} fill="currentColor" />
        <Star size={15} fill="currentColor" />
      </div>

      <h3 className="mt-3 font-semibold">
        {title}
      </h3>

      <p className="mt-1 text-lg font-bold text-amber-600">
        {price}
      </p>
    </motion.div>
  );
}