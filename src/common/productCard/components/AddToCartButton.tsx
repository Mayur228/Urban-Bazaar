import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, ShoppingCart } from "lucide-react";

interface AddToCartButtonProps {
  quantity: number;
  onAdd: () => void;
  onIncrease: () => void;
  onDecrease: () => void;
}

export function AddToCartButton({
  quantity,
  onAdd,
  onIncrease,
  onDecrease,
}: AddToCartButtonProps) {
  return (
    <div className="mt-4 w-full">
      <AnimatePresence mode="wait" initial={false}>
        {quantity === 0 ? (
          <motion.button
            key="add"
            onClick={onAdd}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="
              flex
              h-12
              w-full
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-black
              text-white
              font-semibold
              transition-colors
              hover:bg-amber-500
            "
          >
            <ShoppingCart size={18} />
            Add To Cart
          </motion.button>
        ) : (
          <motion.div
            key="quantity"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="
              flex
              h-12
              w-full
              items-center
              justify-between
              rounded-xl
              bg-amber-600
              px-3
              text-white
            "
          >
            <button
              onClick={onDecrease}
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-lg
                transition
                hover:bg-white/20
              "
            >
              <Minus size={18} />
            </button>

            <span className="text-lg font-bold">
              {quantity}
            </span>

            <button
              onClick={onIncrease}
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-lg
                transition
                hover:bg-white/20
              "
            >
              <Plus size={18} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}