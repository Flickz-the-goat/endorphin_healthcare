const team = [
  {
    name: "Dr. Alexandra Hayes",
    role: "Medical Director",
    creds: "MD, Obesity Medicine",
    initials: "AH",
  },
  {
    name: "Michael Chen, PA-C",
    role: "Clinical Lead",
    creds: "Metabolic Health",
    initials: "MC",
  },
  {
    name: "Sarah Patel, RN",
    role: "Patient Success",
    creds: "Care Navigation",
    initials: "SP",
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
            Meet the Team
          </h2>
          <p className="mt-4 text-neutral-600">
            Experienced clinicians dedicated to safe, effective weight loss and
            wellness.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((m) => (
            <div
              key={m.name}
              className="overflow-hidden rounded-2xl border border-neutral-100 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-4">
                <div className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-cyan-300 to-lime-300 font-semibold text-neutral-900">
                  {m.initials}
                </div>
                <div>
                  <div className="font-semibold text-neutral-900">{m.name}</div>
                  <div className="text-sm text-neutral-600">{m.role}</div>
                </div>
              </div>
              <p className="mt-4 text-sm text-neutral-600">{m.creds}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
