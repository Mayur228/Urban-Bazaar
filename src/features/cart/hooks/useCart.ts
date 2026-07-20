import { useAppSelector } from "../../../app/hooks";

export function useCart() {
  const items = useAppSelector(
    state => state.cart.items
  );

  const totalItems = items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const shipping = subtotal > 1000 ? 0 : 80;

  const tax = subtotal * 0.18;

  const total = subtotal + shipping + tax;

  return {
    items,
    totalItems,
    subtotal,
    shipping,
    tax,
    total,
    isEmpty: items.length === 0,
  };
}