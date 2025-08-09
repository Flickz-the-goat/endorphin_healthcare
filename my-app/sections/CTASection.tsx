import Button from "../components/Button";

export default function CTASection() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 overflow-hidden rounded-3xl border border-neutral-100 bg-gradient-to-r from-neutral-50 to-white shadow-sm">
        <div className="relative isolate p-10 md:p-16">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10"
          >
            <div className="absolute -left-10 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-gradient-to-tr from-cyan-200/60 to-lime-200/60 blur-3xl" />
            <div className="absolute -right-10 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-gradient-to-tr from-cyan-200/40 to-lime-200/40 blur-3xl" />
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 items-center">
            <div className="md:col-span-2">
              <h3 className="text-2xl md:text-3xl font-bold text-neutral-900">
                Transform your health with expert care
              </h3>
              <p className="mt-2 text-neutral-600">
                Start your intake in minutes. Our team will guide you from first
                step to first results.
              </p>
            </div>
            <div className="md:justify-self-end">
              <Button href="/intake">Fill Out Intake Form</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
