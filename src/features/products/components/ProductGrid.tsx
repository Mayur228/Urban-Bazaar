import { ProductCard } from "../../../common/productCard/components/ProductCard";
import { products } from "../../../common/productCard/components/productData";


export function ProductGrid() {
  return (
    <div
      className="
        grid
        gap-8
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
        mt-4
      "
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}