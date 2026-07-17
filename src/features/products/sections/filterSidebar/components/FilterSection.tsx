import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

export function FilterSection({
  title,
  children,
  defaultOpen = true,
}: Props) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <section className="border-b border-stone-200 pb-5">

      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between"
      >
        <h3 className="text-lg font-semibold text-stone-900">
          {title}
        </h3>

        <motion.div
          animate={{
            rotate: open ? 180 : 0,
          }}
          transition={{
            duration: 0.25,
          }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>

        {open && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.25,
            }}
            className="overflow-hidden"
          >
            <div className="pt-5">
              {children}
            </div>
          </motion.div>
        )}

      </AnimatePresence>

    </section>
  );
}