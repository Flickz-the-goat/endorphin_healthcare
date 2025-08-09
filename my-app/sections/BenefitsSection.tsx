const items = [
  {
    title: "Clinically Proven Results",
    emoji: "🧪",
    desc: "Evidence-based therapies that deliver measurable outcomes.",
  },
  {
    title: "Personalized Support",
    emoji: "🤝",
    desc: "Access to experts who tailor protocols to your goals.",
  },
  {
    title: "Fast & Safe Shipping",
    emoji: "🚚",
    desc: "Secure, reliable delivery directly to your door.",
  },
  {
    title: "Premium Care",
    emoji: "✨",
    desc: "High-touch guidance and modern patient experience.",
  },
];

export default function BenefitsSection() {
  return (
    <section id="benefits" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
            Why Endorphin Global?
          </h2>
          <p className="mt-4 text-neutral-600">
            Trusted, science-led, and patient-first. We build programs that fit
            real lives.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <div
              key={it.title}
              className="group relative overflow-hidden rounded-2xl border border-neutral-100 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-tr from-cyan-200/50 to-lime-200/50 blur-xl" />
              <div className="text-2xl">{it.emoji}</div>
              <h3 className="mt-3 font-semibold text-neutral-900">
                {it.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-600">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
