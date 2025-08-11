import Image from "next/image";
import Button from "../components/Button";

export default function Hero() {
  return (
    <section className="relative isolate pt-32 md:pt-36">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -top-24 left-1/2 h-[46rem] w-[46rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-cyan-200/50 to-lime-200/50 blur-3xl" />
        <div className="absolute bottom-0 right-[-10%] h-72 w-72 rounded-full bg-gradient-to-tr from-cyan-300/30 to-lime-300/30 blur-2xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900">
              Medical Weight Loss, Optimized for Real Life
            </h1>
            <p className="mt-5 text-neutral-600 text-lg leading-relaxed max-w-2xl">
              Endorphin Global Healthcare delivers science-backed treatments for
              sustainable weight loss and wellness. Expert guidance, premium
              care, proven outcomes.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href="#products">View Products</Button>
              <Button href="#products" variant="secondary">
                Start Your Journey
              </Button>
            </div>
            <div className="my-6 flex items-center gap-6 text-sm text-neutral-600">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-lime-400" /> Clinically
                guided
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-cyan-400" />{" "}
                Evidence-based
              </div>
            </div>
          </div>
          <div className="lg:col-span-5  lg:block hidden mb-10 ">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-100 to-neutral-50 shadow-lg">
              <Image
                src={"/hero-section.jpg"}
                alt="hero-image"
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
