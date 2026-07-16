import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

type Props = {
  review: {
    name: string;
    role: string;
    image: string;
    review: string;
    rating: number;
  };
};

export function ReviewCard({
  review,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{
        duration: .3,
      }}
      className="
      group
      relative
      overflow-hidden
      rounded-3xl
      border
      border-white/30
      bg-white/70
      p-8
      shadow-xl
      backdrop-blur-xl"
    >
      <Quote
        size={42}
        className="text-amber-400"
      />

      <div className="mt-6 flex gap-1">

        {Array.from({
          length: review.rating,
        }).map((_, index) => (
          <Star
            key={index}
            size={18}
            fill="#FACC15"
            color="#FACC15"
          />
        ))}

      </div>

      <p className="mt-6 leading-8 text-gray-600 italic">
        "{review.review}"
      </p>

      <div className="mt-8 flex items-center gap-4">

        <img
          src={review.image}
          alt={review.name}
          className="h-14 w-14 rounded-full object-cover"
        />

        <div>

          <h4 className="font-bold">
            {review.name}
          </h4>

          <p className="text-sm text-gray-500">
            {review.role}
          </p>

        </div>

      </div>
    </motion.div>
  );
}