import { notFound } from "next/navigation";
import { products as productsData } from "../../constants";

export async function generateStaticParams() {
  return productsData.map((p) => ({ slug: p.slug }));
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = productsData.find((p) => p.slug === params.slug);
  if (!product) return notFound();
  return (
    <main className="pt-24 pb-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wide text-cyan-700">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" /> Endorphin
          Global
        </div>
        <h1 className="mt-2 text-3xl md:text-4xl font-extrabold text-neutral-900">
          {product.name}
        </h1>
        <p className="mt-3 text-neutral-600">{product.description}</p>

        <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {product.benefits.map((b) => (
            <li key={b} className="flex items-center gap-2 text-neutral-700">
              <span className="h-1.5 w-1.5 rounded-full bg-lime-400" /> {b}
            </li>
          ))}
        </ul>

        <div className="mt-10 overflow-hidden rounded-3xl border border-neutral-100 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-neutral-900">FAQs</h2>
          <div className="mt-4 space-y-3 text-neutral-700">
            <div>
              <div className="font-medium">How does {product.name} work?</div>
              <p className="text-sm">
                We leverage clinical best practices to tailor dosing and support
                for your physiology and goals.
              </p>
            </div>
            <div>
              <div className="font-medium">Is it right for me?</div>
              <p className="text-sm">
                Our intake screens for safety and efficacy. You will receive
                clinician guidance before starting.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8"></div>
      </div>
    </main>
  );
}
