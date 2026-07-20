import { useCart } from "../hooks/useCart";

export function OrderSummary() {
  const {
    subtotal,
    shipping,
    tax,
    total,
  } = useCart();

  return (
    <aside
      className="
        sticky
        top-24
        h-fit
        rounded-2xl
        border
        border-stone-200
        bg-white
        p-6
        shadow-sm
      "
    >
      <h2 className="text-2xl font-bold">
        Order Summary
      </h2>

      <div className="mt-8 space-y-4">

        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>$ {subtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between">
          <span>Shipping</span>
          <span>
            {shipping === 0 ? "Free" : `$ ${shipping}`}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Tax</span>
          <span>$ {tax.toFixed(2)}</span>
        </div>

        <hr />

        <div className="flex justify-between text-xl font-bold">
          <span>Total</span>
          <span>$ {total.toFixed(2)}</span>
        </div>

      </div>

      <button
        className="
          mt-8
          w-full
          rounded-xl
          bg-amber-600
          py-4
          font-semibold
          text-white
          transition
          hover:bg-amber-700
        "
      >
        Proceed to Checkout
      </button>
    </aside>
  );
}