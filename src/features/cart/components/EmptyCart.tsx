import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

export function EmptyCart() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">

      <ShoppingCart
        size={72}
        className="text-stone-300"
      />

      <h2 className="mt-6 text-4xl font-bold">
        Your cart is empty
      </h2>

      <p className="mt-4 max-w-md text-stone-500">
        Looks like you haven't added anything yet.
        Explore our collection and start shopping.
      </p>

      <Link
        to="/products"
        className="
          mt-8
          rounded-xl
          bg-amber-600
          px-8
          py-4
          font-semibold
          text-white
          transition
          hover:bg-amber-700
        "
      >
        Continue Shopping
      </Link>

    </section>
  );
}