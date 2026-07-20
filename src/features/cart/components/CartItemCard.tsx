import { Trash2 } from "lucide-react";

import { useAppDispatch } from "../../../app/hooks";
import {
  decreaseQuantity,
  increaseQuantity,
  removeItem,
} from "../store/cartSlice";
import type { CartItem } from "../types/cart";

interface Props {
  item: CartItem;
}

export function CartItemCard({ item }: Props) {
  const dispatch = useAppDispatch();

  return (
    <article
      className="
        flex
        flex-col
        gap-6
        rounded-2xl
        border
        border-stone-200
        bg-white
        p-5
        shadow-sm
        transition-shadow
        hover:shadow-md
        sm:flex-row
      "
    >
      {/* Product Image */}
      <img
        src={item.image}
        alt={item.title}
        className="h-36 w-36 rounded-xl object-cover"
      />

      {/* Product Details */}
      <div className="flex flex-1 flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold text-stone-900">
            {item.title}
          </h3>

          <p className="mt-2 text-sm text-stone-500">
            $ {item.price.toFixed(2)}
          </p>
        </div>

        {/* Bottom Row */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          {/* Quantity Selector */}
          <div className="flex items-center rounded-xl border border-stone-300">
            <button
              onClick={() => dispatch(decreaseQuantity(item.id))}
              className="px-4 py-2 transition hover:bg-stone-100"
            >
              −
            </button>

            <span className="min-w-10 text-center font-semibold">
              {item.quantity}
            </span>

            <button
              onClick={() => dispatch(increaseQuantity(item.id))}
              className="px-4 py-2 transition hover:bg-stone-100"
            >
              +
            </button>
          </div>

          {/* Total Price */}
          <div className="text-lg font-bold text-amber-600">
            $ {(item.price * item.quantity).toFixed(2)}
          </div>

          {/* Remove */}
          <button
            onClick={() => dispatch(removeItem(item.id))}
            className="
              rounded-lg
              p-2
              text-red-500
              transition
              hover:bg-red-50
            "
          >
            <Trash2 size={20} />
          </button>
        </div>
      </div>
    </article>
  );
}