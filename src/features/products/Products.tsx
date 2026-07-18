import { useState } from "react";

import { ProductHeader } from "./components/ProductHeader";
import { ProductToolbar } from "./components/ProductToolbar";
import { ProductSearch } from "./components/ProductSearch";
import { useProducts } from "./hooks/useProducts";
import { ProductGrid } from "../../common/productCard/ProductGrid";
import { FilterSidebar } from "./sections/filterSidebar/FilterSidebar";
import { CategoryFilter } from "./sections/categories/components/CategoryFilter";
import { categories } from "./sections/categories/components/categories";


export function Products() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [search, setSearch] = useState("");
    const [filterOpen, setFilterOpen] = useState(false);

    const {
        categories,
        products,
    } = useProducts();

    return (
        <main className="mx-auto max-w-7xl px-6 py-12 space-y-5">

            <ProductHeader />

            <ProductSearch
                value={search}
                onChange={setSearch}
            />

            <CategoryFilter
                categories={categories}
                selected={selectedCategory}
                onSelect={setSelectedCategory}
            />

            <ProductToolbar
                total={24}
                onOpenFilters={() => setFilterOpen(true)}
            />

            <ProductGrid products={products} />

            <FilterSidebar
                open={filterOpen}
                onClose={() => setFilterOpen(false)}
            />

        </main>
    );
}