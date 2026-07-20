import { CartList } from "./components/CartList";
import { EmptyCart } from "./components/EmptyCart";
import { OrderSummary } from "./components/OrderSummary";
import { useCart } from "./hooks/useCart";

export default function Cart() {
  const cart = useCart();

  if (cart.isEmpty) {
    return <EmptyCart />;
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-10">

      <h1 className="mb-10 text-4xl font-bold">
        Shopping Cart
      </h1>

      <div className="grid gap-8 lg:grid-cols-[2fr_420px]">

        <CartList />

        <OrderSummary />

      </div>

    </section>
  );
}