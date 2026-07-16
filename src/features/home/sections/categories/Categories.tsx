import { categories } from "./components/categoriesData";
import { CategoryCard } from "./components/CategoryCard";

export function Categories() {
  return (
    <section className="py-10">

      <div className="mx-auto max-w-7xl px-6">

        <div className="flex flex-col mb-16 text-center items-center">

          <span className="text-sm font-semibold uppercase tracking-[5px] text-amber-600">
            Categories
          </span>

          <h2 className="mt-5 text-5xl font-bold">
            Shop By Category
          </h2>

           <div className="mt-4">
                <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-500">
                  Explore curated collections crafted
                  for every lifestyle and every occasion.
                </p>      
            </div>
          

        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              title={category.title}
              image={category.image}
            />
          ))}

        </div>

      </div>

    </section>
  );
}