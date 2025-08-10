const reviews = [
  {
    name: "Emily R.",
    text: "I lost 24 pounds in 12 weeks with supportive check-ins and a plan that worked for my life. I feel energetic again.",
    rating: 5,
  },
  {
    name: "James P.",
    text: "Semaglutide helped me control cravings. The team kept it simple and science-based. Down 3 pant sizes.",
    rating: 5,
  },
  {
    name: "Ava K.",
    text: "NAD+ gave me a mental clarity boost I didn’t expect. Workouts and recovery are better than ever.",
    rating: 4,
  },
];

export default function ReviewsSection() {
  return (
    <section id="reviews" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
            Real People. Real Results.
          </h2>
          <p className="mt-4 text-neutral-600">
            Authentic stories from patients achieving healthy, sustainable
            change.
          </p>
        </div>
        <div className="mt-10 flex items-center justify-center flex-wrap">
          <div className="grid gap-6">
            {reviews.map((r) => (
              <ReviewCard key={r.name} {...r} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ReviewCard({
  name,
  text,
  rating,
}: {
  name: string;
  text: string;
  rating: number;
  tall?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-3xl border border-neutral-100 bg-white p-6 shadow-sm `}
    >
      <div className="absolute -left-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-tr from-cyan-200/50 to-lime-200/50 blur-2xl" />
      <div className="flex items-center gap-3">
        <div>
          <div className="font-semibold text-neutral-900">{name}</div>
          <div className="text-sm text-yellow-500">
            {"★".repeat(rating)}
            {"☆".repeat(5 - rating)}
          </div>
        </div>
      </div>
      <p className="mt-4 text-neutral-700">{text}</p>
    </div>
  );
}
