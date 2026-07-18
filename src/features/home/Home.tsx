import { ProductGrid } from "../../common/productCard/ProductGrid";
import { useProducts } from "../products/hooks/useProducts";
import { Categories } from "./sections/categories/Categories";
import { Hero } from "./sections/hero/Hero";
import { NewArrival } from "./sections/newArrival/NewArrival";
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
            <ProductGrid products={products.slice(0,4) }/>
            <PromoBanner />
            <UrbanFeatures />
            <Reviews />
        </div>
    )
}