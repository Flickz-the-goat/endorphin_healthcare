"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Is medical weight loss safe?",
    a: "Yes. Our protocols use FDA-approved medications where indicated and physician oversight to ensure safety and effectiveness.",
  },
  {
    q: "How fast will I see results?",
    a: "Most patients begin noticing changes within weeks. We optimize dosing and lifestyle guidance for sustainable results.",
  },
  {
    q: "Do you ship nationwide?",
    a: "Yes. We offer fast, secure shipping with temperature controls where required.",
  },
  {
    q: "What products do you offer?",
    a: "Tirzepatide, Semaglutide, NAD+, Sermorelin, and Glutathione with expert guidance.",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 text-center">
          Frequently Asked Questions
        </h2>
        <div className="mt-10 divide-y divide-neutral-200 rounded-2xl border border-neutral-100 bg-white">
          {faqs.map((f) => (
            <Accordion key={f.q} question={f.q} answer={f.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Accordion({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="p-5">
      <button
        className="flex w-full items-center justify-between text-left"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="font-medium text-neutral-900">{question}</span>
        <span className="ml-4 text-cyan-600">{open ? "−" : "+"}</span>
      </button>
      <div
        className={`grid transition-all duration-300 ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-70"
        }`}
      >
        <div className="overflow-hidden">
          <p className="mt-3 text-sm text-neutral-600">{answer}</p>
        </div>
      </div>
    </div>
  );
}
