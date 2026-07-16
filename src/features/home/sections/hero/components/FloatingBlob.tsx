import { motion } from "framer-motion";

type Props = {
  className: string;
  duration?: number;
};

export function FloatingBlob({
  className,
  duration = 8,
}: Props) {
  return (
    <motion.div
      animate={{
        y: [0, -40, 0],
        x: [0, 20, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        repeat: Infinity,
        duration,
        ease: "easeInOut",
      }}
      className={className}
    />
  );
}