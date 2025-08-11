import Button from "@/components/Button";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function YourJourneySection() {
  const journeySteps = [
    {
      step: 1,
      title: "Sign Up",
      description:
        "Fill out our simple form with your name, email, and phone number. Our AI will automatically call you to begin your journey.",
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      step: 2,
      title: "AI Onboarding Call",
      description:
        "Receive a call from our intelligent AI agent who answers all your preliminary questions and sends you the next steps via SMS or email.",
      color: "from-cyan-500/20 to-teal-500/20",
    },
    {
      step: 3,
      title: "Complete Intake Form",
      description:
        "Fill out our comprehensive intake form so our medical team can understand your health goals and create your personalized plan.",
      color: "from-teal-500/20 to-emerald-500/20",
    },
    {
      step: 4,
      title: "Doctor Consultation",
      description:
        "Have a personalized consultation with a real doctor who will review your health profile and prescribe your custom treatment plan.",
      color: "from-emerald-500/20 to-green-500/20",
    },
    {
      step: 5,
      title: "Supplements Shipped",
      description:
        "Your personalized supplements and medications are carefully packaged and shipped directly to your door for convenience.",
      color: "from-green-500/20 to-lime-500/20",
    },
    {
      step: 6,
      title: "Transform Your Body",
      description:
        "Start your weight loss journey and watch as you transform into the dream body you've always wanted, with ongoing support every step of the way.",
      color: "from-lime-500/20 to-yellow-500/20",
    },
  ];

  return (
    <section id="journey" className="relative py-20 md:py-28">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-cyan-200/30 to-lime-200/30 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            Your Journey to Your Dream Body
          </h2>
          <p className="text-md text-neutral-600 leading-relaxed">
            Follow our proven 6-step process designed to transform your health
            and help you achieve sustainable weight loss with medical-grade
            support.
          </p>
        </div>

        {/* Journey Steps */}
        <div className="space-y-12">
          {journeySteps.map((step, index) => (
            <div key={step.step} className="relative">
              {/* Step Number */}
              <div className="flex items-center gap-6 mb-4">
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-neutral-900 font-bold text-lg border border-neutral-200/50`}
                >
                  {step.step}
                </div>
                <h3 className="text-2xl font-bold text-neutral-900">
                  {step.title}
                </h3>
              </div>

              {/* Description */}
              <div className="ml-18 pl-6 border-l-2 border-neutral-200/50">
                <p className="text-neutral-600 leading-relaxed text-lg max-w-3xl">
                  {step.description}
                </p>
              </div>

              {/* Connecting Line */}
              {index < journeySteps.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-12 bg-gradient-to-b from-neutral-200 to-neutral-100" />
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <Button
            href="https://app.centerfy.ai/v2/preview/AeCZaabnRkOoc7FSkDx7"
            variant="secondary"
            className="gap-2 group"
          >
            Start Your Journey Today{" "}
            <ArrowRight className="w-5 h-5 group-hover:-rotate-45 transition-transform duration-300" />
          </Button>
          <p className="mt-4 text-sm text-neutral-500">
            Join our family, we are here with on every step
          </p>
        </div>
      </div>
    </section>
  );
}
