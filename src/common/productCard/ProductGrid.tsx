import type { Product } from "../../features/products/types/productsData";
import { ProductCard } from "./components/ProductCard";

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({products}: ProductGridProps){
  return (
    <section className="py-10">

      <div className="mx-auto max-w-7xl px-6">

        <div className="flex flex-col mb-16 text-center items-center">

          <span className="text-sm font-semibold uppercase tracking-[5px] text-amber-600">
            Best Sellers
          </span>

          <h2 className="mt-5 text-5xl font-bold">
            Featured Products
                  </h2>
                  <div className="mt-5">
                      <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-500 ">
            Discover the most loved products from
            Urban Bazaar.
          </p>

                  </div>


        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          
          {
            products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))
          }

        </div>

      </div>

    </section>
  );
}