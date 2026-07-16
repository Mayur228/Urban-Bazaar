import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

type Props = {
  title: string;
  image: string;
};

export function CategoryCard({
  title,
  image,
}: Props) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: .3 }}
      className="group relative overflow-hidden rounded-3xl cursor-pointer"
    >
      <img
        src={image}
        alt={title}
        className="
        h-[420px]
        w-full
        object-cover
        duration-700
        group-hover:scale-110"
      />

      <div
        className="
        absolute
        inset-0
        bg-gradient-to-t
        from-black/80
        via-black/10
        to-transparent"
      />

      <div
        className="
        absolute
        bottom-0
        left-0
        right-0
        p-8
        text-white"
      >
        <h3 className="text-3xl font-bold">
          {title}
        </h3>

        <button
          className="
          mt-5
          flex
          items-center
          gap-2
          rounded-full
          bg-white
          px-5
          py-3
          font-semibold
          text-black
          duration-300
          group-hover:gap-4"
        >
          Shop Now

          <ArrowRight size={18} />
        </button>
      </div>
    </motion.div>
  );
}