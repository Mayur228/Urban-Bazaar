import { Heart } from "lucide-react";

export function HeroBadge() {
  return (
    <div className="flex items-center gap-3 rounded-full bg-white px-5 py-3 shadow-xl">

      <Heart
        className="text-red-500"
        fill="currentColor"
      />

      <span className="font-semibold">
        3.2k Wishlist
      </span>

    </div>
  );
}