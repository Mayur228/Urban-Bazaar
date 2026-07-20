import type { Product } from "../../features/products/types/productsData";
import { ProductCard } from "./components/ProductCard";

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({products}: ProductGridProps){
  return (
    <section className="py-10">

      <div className="mx-auto max-w-7xl px-6">

    

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