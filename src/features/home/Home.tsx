import { ProductGrid } from "../../common/productCard/ProductGrid";
import { useProducts } from "../products/hooks/useProducts";
import { Categories } from "./sections/categories/Categories";
import { Hero } from "./sections/hero/Hero";
import { PromoBanner } from "./sections/promoBanner/PromoBanner";
import { Reviews } from "./sections/review/Review";
import { UrbanFeatures } from "./sections/urbanFeatures/UrbanFeatures";


export function Home() {
    const {
            products,
        } = useProducts();

    return (
        <div>
            <Hero />
            <Categories />
                <div className="flex flex-col mb-4 text-center items-center">

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
            <ProductGrid products={products.slice(0,4) }/>
            <PromoBanner />
            <UrbanFeatures />
            <Reviews />
        </div>
    )
}