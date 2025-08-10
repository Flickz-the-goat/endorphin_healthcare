import Link from "next/link";
import { products } from "../app/constants";
import Image from "next/image";

export default function ProductsSection() {
  return (
    <section id="products" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
            Featured Treatments
          </h2>
          <Link
            href="/products"
            className="hidden md:inline text-sm font-semibold text-cyan-600 hover:text-cyan-500"
          >
            Explore all
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-8">
          {products.map((p, i) => (
            <Link
              key={p.slug}
              href={`/products/${p.slug}`}
              className="group relative overflow-hidden rounded-3xl border border-neutral-100 bg-white shadow-sm transition-transform hover:shadow-md"
            >
              <div
                className={`grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch ${
                  i % 2 === 0 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="md:col-span-5 relative object-contain">
                  <div className="h-full min-h-64 bg-gradient-to-br from-neutral-100 to-neutral-50">
                    <Image src={p.image} alt="product-image" fill/>
                  </div>
                </div>
                <div className="md:col-span-7 p-6 sm:p-10 flex flex-col">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-cyan-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />{" "}
                    Medical Weight Loss & Wellness
                  </div>
                  <h3 className="mt-2 text-2xl md:text-3xl font-bold text-neutral-900">
                    {p.name}
                  </h3>
                  <p className="mt-3 text-neutral-600 leading-relaxed">
                    {p.description}
                  </p>
                  <ul className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm text-neutral-700">
                    {p.benefits.map((b) => (
                      <li key={b} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-lime-400" />{" "}
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex items-center gap-4">
                    <span className="inline-flex items-center text-sm font-semibold text-cyan-700 group-hover:translate-x-0.5 transition-transform">
                      Learn more →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
