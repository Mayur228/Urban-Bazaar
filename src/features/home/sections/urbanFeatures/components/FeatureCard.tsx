import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

type Props = {
  title: string;
  description: string;
  Icon: LucideIcon;
};

export function FeatureCard({
  title,
  description,
  Icon,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: .3,
      }}
      className="
      group
      rounded-3xl
      border
      border-gray-200
      bg-white
      p-8
      shadow-sm
      transition
      hover:border-amber-300
      hover:shadow-xl"
    >
      <div
        className="
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-2xl
        bg-amber-100
        transition
        group-hover:scale-110
        group-hover:bg-amber-500"
      >
        <Icon
          size={30}
          className="text-amber-600 group-hover:text-white"
        />
      </div>

      <h3 className="mt-6 text-2xl font-bold">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-gray-500">
        {description}
      </p>
    </motion.div>
  );
}