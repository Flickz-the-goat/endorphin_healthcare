
import AiOrb from "@/components/AiOrb";
import { Stars } from "lucide-react";

export default function OrbSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-neutral-50">
      <div className="max-w-3xl mx-auto text-center px-6">
        {/* Headline */}
        <h1 className="font-extrabold text-4xl md:text-5xl text-neutral-900 tracking-tight mb-4">
          Chat with <span className="text-[#33dafd] hover:underline">Morgan</span> 
        </h1>

        <p className="text-lg text-neutral-500 mb-8">
          Meet our <Stars className="inline-block stroke-none fill-yellow-500"/> AI assistant Morgan — always here to help you with instant answers
          and guidance.
        </p>

          <AiOrb />
      </div>
    </section>
  );
}

