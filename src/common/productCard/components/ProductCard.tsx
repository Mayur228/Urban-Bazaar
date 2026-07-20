import { Heart, Star } from "lucide-react";
import { motion } from "framer-motion";
import type { Product } from "../../../features/products/types/productsData";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { addToCart, decreaseQuantity, increaseQuantity } from "../../../features/cart/store/cartSlice";
import { AddToCartButton } from "./AddToCartButton";

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const dispatch = useAppDispatch();

  const cartItem = useAppSelector((state) =>
  state.cart.items.find((item) => item.id === product.id)
  );
  
  const quantity = cartItem?.quantity ?? 0;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:shadow-2xl"
    >
      <div className="relative overflow-hidden">

        <img
          src={ product.images?.length
      ? product.images[0]
      : "https://placehold.co/600x600?text=No+Image"}
          alt={product.title}
          className="h-80 w-full object-cover duration-700 group-hover:scale-110"
        />

        <button className="absolute right-4 top-4 rounded-full bg-white p-3 shadow-lg transition hover:bg-red-500 hover:text-white">
          <Heart size={18} />
        </button>

      </div>

      <div className="p-6">

        <h3 className="text-xl font-semibold">
          {product.title}
        </h3>

        <div className="mt-3 flex items-center gap-2">

          <Star
            size={18}
            fill="#FACC15"
            color="#FACC15"
          />

         </div>

        <div className="mt-4 flex items-center gap-3">

          <span className="text-2xl font-bold">
            ${product.price}
          </span>

        </div>
        
        <AddToCartButton
           quantity={quantity}
           onAdd={() =>
             dispatch(
               addToCart({
                 id: product.id,
                 title: product.title,
                 price: product.price,
                 image: product.images[0],
                 quantity: 1,
               })
             )
           }
           onIncrease={() => dispatch(increaseQuantity(product.id))}
           onDecrease={() => dispatch(decreaseQuantity(product.id))}
        />
      </div>
    </motion.div>
  );
}