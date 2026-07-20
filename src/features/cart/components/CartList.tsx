import { useCart } from "../hooks/useCart";
import { CartItemCard } from "./CartItemCard";

export function CartList() {
  const { items } = useCart();

  return (
    <div className="space-y-6">
      {items.map((item) => (
        <CartItemCard
          key={item.id}
          item={item}
        />
      ))}
    </div>
  );
}