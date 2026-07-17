import {
  brands,
  categoryFilters,
} from "./components/filterData";

import { CheckboxFilter } from "./components/CheckboxFilter";
import { FilterActions } from "./components/FilterActions";
import { FilterSection } from "./components/FilterSection";
import { PriceFilter } from "./components/PriceFilter";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
}

export function FilterSidebar({
  open,
  onClose,
}: Props) {
  return (
    <AnimatePresence>

      {open && (
        <>

          {/* Backdrop */}

          <motion.div
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
          />

          {/* Drawer */}

          <motion.aside
            initial={{ x: -420 }}
            animate={{ x: 0 }}
            exit={{ x: -420 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
            className="
              fixed
              left-0
              top-0
              z-50
              flex
              h-screen
              w-[360px]
              flex-col
              bg-white
              shadow-2xl
            "
          >

            {/* Header */}

            <div className="flex items-center justify-between border-b p-6">

              <h2 className="text-2xl font-bold">
                Filters
              </h2>

              <button
                onClick={onClose}
                className="rounded-full p-2 hover:bg-stone-100"
              >
                <X size={22} />
              </button>

            </div>

            {/* Scrollable Content */}

            <div className="flex-1 space-y-8 overflow-y-auto p-6">

              <FilterSection title="Categories">
                <CheckboxFilter items={categoryFilters} />
              </FilterSection>

              <FilterSection title="Price">
                <PriceFilter />
              </FilterSection>

              <FilterSection title="Brands">
                <CheckboxFilter items={brands} />
              </FilterSection>

            </div>

            {/* Sticky Footer */}

            <div className="border-t bg-white p-6">
              <FilterActions
                onApply={onClose}
              />
            </div>

          </motion.aside>

        </>
      )}

    </AnimatePresence>
  );
}