import { notFound } from "next/navigation";
import { products as productsData } from "../../constants";
import Button from "@/components/Button";
import Link from "next/link";
import { AlertOctagon, AlertTriangle, ArrowUp, Syringe } from "lucide-react";

export async function generateStaticParams() {
  return productsData.map((p) => ({ slug: p.slug }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = productsData.find((p) => p.slug === slug);
  if (!product) return notFound();
  return (
    <main className="pt-24 pb-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div
          id="top"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-wide text-cyan-700"
        >
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

        <h2 className="mt-8 text-center text-md text-neutral-900 font-extrabold">New Patients Only Plans</h2>
        <div className="mt-2 flex gap-4 justify-center">

          <Link href={product.link_one}>
            <Button>{product.plan_one}</Button>
          </Link>
        {
            product.plan_two && 
          <Link href={product.link_two}>
            <Button>{product.plan_two}</Button>
          </Link>
        }
        </div>

        <div className=" mt-6 border-t p-6 border-neutral-200 rounded-xl space-y-12">
          <div className="bg-green-50 p-2 rounded-xl border-2 border-green-500">
            <h1 className="text-3xl font-extrabold mb-4 text-center text-green-500">
              Results
            </h1>
            <div className="flex-col md:flex-row flex gap-2">
              {product.results.map((r) => {
                return (
                  <div
                    key={r.type}
                    className="text-green-800 space-y-4 mb-4 flex-1"
                  >
                    <h2 className="text-lg font-semibold text-center">
                      {r.type}
                    </h2>
                    {r.list.map((item) => {
                      return (
                        <li key={item} className="text-green-700 ml-6">
                          {item}
                        </li>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="text-neutral-900 space-y-2 p-6 rounded-xl border border-neutral-200">
            <h1 className="font-extrabold text-2xl mb-4 flex gap-4 items-center">
              Administration{" "}
              <Syringe className="inline-block stroke-cyan-700" />
            </h1>
            <p className="font-semibold">
              Starting dosage:{" "}
              <span className="font-normal">{product.dosing.start}</span>
            </p>
            <p className="font-semibold">
              Maintainance dosage:{" "}
              <span className="font-normal">
                {product.dosing.maintainance.join(", ")}
              </span>
            </p>
            <p className="font-semibold">
              Injection Site:{" "}
              <span className="font-normal">
                {product.dosing.injection_site}
              </span>{" "}
            </p>
          </div>

          <div className="text-neutral-900 p-6 rounded-xl border border-neutral-200">
            <h1 className="font-extrabold text-2xl mb-4 flex items-center gap-4 justify-center">
              Side Effects <AlertOctagon className="stroke-red-700" />
            </h1>
            <div className="flex flex-col md:flex-row gap-2">
              {product.side_effects.map((effect) => {
                return (
                  <div key={effect.type} className="flex-1">
                    <h2 className="font-semibold text-lg mb-2">
                      {effect.type} ( {effect.chance} ):
                    </h2>
                    {effect.effects.map((e) => {
                      return (
                        <li key={e} className="mb-2">
                          {e}
                        </li>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-red-50 p-6 border border-red-500 rounded-xl">
            <h1 className="flex gap-2 items-center text-red-700 mb-4 font-extrabold justify-between text-2xl">
              Preacaution <AlertTriangle className="" />
            </h1>
            {product.caution.map((c) => {
              return (
                <li key={c} className="text-red-700 mb-2">
                  {c}
                </li>
              );
            })}
          </div>
          <Link
            href="#top"
            className="flex items-center w-full justify-center md:hidden"
          >
            <Button className="rounded-full w-fit h-fit">
              <ArrowUp className="stroke-white" />
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
