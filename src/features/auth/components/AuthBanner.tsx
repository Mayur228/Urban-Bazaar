import { ShieldCheck, Truck, Sparkles } from "lucide-react";

export function AuthBanner() {
  return (
    <div className="relative hidden overflow-hidden rounded-r-[60px] lg:flex m-4">

      <img
        src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80"
        alt="Fashion"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 flex flex-col justify-between p-12 text-white">

        <div>

          <h1 className="text-5xl font-black leading-tight">
            Urban
            <br />
            Bazaar
          </h1>

          <p className="mt-6 max-w-md text-lg text-white/80">
            Discover premium fashion designed for modern lifestyles.
          </p>

        </div>

        <div className="space-y-5">

          <div className="flex items-center gap-4">
            <Truck />
            <span>Free Shipping Worldwide</span>
          </div>

          <div className="flex items-center gap-4">
            <ShieldCheck />
            <span>100% Secure Payments</span>
          </div>

          <div className="flex items-center gap-4">
            <Sparkles />
            <span>Premium Quality Products</span>
          </div>

        </div>

      </div>

    </div>
  );
}