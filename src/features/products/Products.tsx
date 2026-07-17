import { useState } from "react";

import { categories } from "./sections/categories/components/categories";
import { ProductHeader } from "./components/ProductHeader";
import { CategoryFilter } from "./sections/categories/components/CategoryFilter";
import { ProductToolbar } from "./components/ProductToolbar";
import { ProductGrid } from "./components/ProductGrid";
import { ProductSearch } from "./components/ProductSearch";
import { FilterSidebar } from "./sections/filterSidebar/FilterSidebar";

export function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");
const [search, setSearch] = useState("");
const [filterOpen, setFilterOpen] = useState(false);

return (
    <main className=" space-y-4 mx-auto max-w-7xl px-6 py-12">

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

        <ProductGrid />

        <FilterSidebar
            open={filterOpen}
            onClose={() => setFilterOpen(false)}
        />

    </main>
);
}