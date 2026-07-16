import { Heart, ShoppingBag, Star } from "lucide-react";
import { motion } from "framer-motion";

type Props = {
  product: {
    name: string;
    image: string;
    price: number;
    oldPrice: number;
    rating: number;
    reviews: number;
    discount: number;
  };
};

export function ProductCard({ product }: Props) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:shadow-2xl"
    >
      <div className="relative overflow-hidden">

        <img
          src={product.image}
          alt={product.name}
          className="h-80 w-full object-cover duration-700 group-hover:scale-110"
        />

        <span className="absolute left-4 top-4 rounded-full bg-red-500 px-3 py-1 text-sm font-semibold text-white">
          -{product.discount}%
        </span>

        <button className="absolute right-4 top-4 rounded-full bg-white p-3 shadow-lg transition hover:bg-red-500 hover:text-white">
          <Heart size={18} />
        </button>

      </div>

      <div className="p-6">

        <h3 className="text-xl font-semibold">
          {product.name}
        </h3>

        <div className="mt-3 flex items-center gap-2">

          <Star
            size={18}
            fill="#FACC15"
            color="#FACC15"
          />

          <span>{product.rating}</span>

          <span className="text-gray-500">
            ({product.reviews})
          </span>

        </div>

        <div className="mt-4 flex items-center gap-3">

          <span className="text-2xl font-bold">
            ${product.price}
          </span>

          <span className="text-gray-400 line-through">
            ${product.oldPrice}
          </span>

        </div>

        <button
          className="
          mt-6
          flex
          w-full
          items-center
          justify-center
          gap-2
          rounded-xl
          bg-black
          py-4
          font-semibold
          text-white
          transition
          hover:bg-amber-500"
        >
          <ShoppingBag size={18} />

          Add To Cart

        </button>

      </div>
    </motion.div>
  );
}