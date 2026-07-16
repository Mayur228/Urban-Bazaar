import { ProductGrid } from "../../common/productCard/ProductGrid";
import { Categories } from "./sections/categories/Categories";
import { Hero } from "./sections/hero/Hero";
import { NewArrival } from "./sections/newArrival/NewArrival";
import { PromoBanner } from "./sections/promoBanner/PromoBanner";
import { Reviews } from "./sections/review/Review";
import { UrbanFeatures } from "./sections/urbanFeatures/UrbanFeatures";

export function Home() { 
    return (
        <div>
            <Hero />
            <Categories />
            <ProductGrid />
            <NewArrival />
            <PromoBanner />
            <UrbanFeatures />
            <Reviews />
        </div>
    )
}