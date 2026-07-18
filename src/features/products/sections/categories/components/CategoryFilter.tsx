import { motion } from "framer-motion";
import type { Category } from "../../../types/productsData";


interface Props {
  categories: Category[];
  selected: string;
  onSelect: (category: string) => void;
}

export function CategoryFilter({
  categories,
  selected,
  onSelect,
}: Props) {
  return (
    <div className="flex gap-4 overflow-x-auto hide-scrollbar p-2">

      {categories.map((category) => {

        const active = selected === category.name;

        return (
          <button
            key={category.id}
            onClick={() => onSelect(category.name)}
            className="
              relative
              shrink-0
            "
          >
            {active && (
              <motion.div
                layoutId="active-category"
                transition={{
                  type: "spring",
                  stiffness: 350,
                  damping: 28,
                }}
                className="
                  absolute
                  inset-0
                  rounded-full
                  bg-amber-600
                "
              />
            )}

            <div
              className={`
                relative
                flex
                items-center
                gap-2
                rounded-full
                border
                px-5
                py-3
                transition-all
                duration-300

                ${
                  active
                    ? "border-amber-600 text-white"
                    : "border-stone-200 bg-white hover:-translate-y-1 hover:border-amber-500 hover:shadow-lg"
                }
              `}
            >

              <img className="size-10 rounded-3xl object-cover" src={category.image} alt="category" />

              <span className="text-sm font-medium">
                {category.name}
              </span>
            </div>

          </button>
        );
      })}
    </div>
  );
}