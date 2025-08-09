import Link from "next/link";
import { products } from "../constants";

export const metadata = {
  title: "Products | Endorphin Global Healthcare",
  description:
    "Explore medical weight loss and wellness treatments including Tirzepatide, Semaglutide, NAD+, Sermorelin, and Glutathione.",
};

export default function Products() {
  return (
    <main className="pt-24 pb-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-neutral-900">
          All Treatments
        </h1>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <Link
              key={p.slug}
              href={`/products/${p.slug}`}
              className="group rounded-2xl border border-neutral-100 bg-white p-6 shadow-sm hover:shadow-md"
            >
              <div className="h-28 rounded-xl bg-gradient-to-br from-neutral-100 to-neutral-50 group-hover:scale-[1.02] transition-transform" />
              <div className="mt-4 font-semibold text-neutral-900">
                {p.name}
              </div>
              <p className="mt-1 text-sm text-neutral-600">{p.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
