"use client";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface Plan {
    title: string;
    link: string;
}
const resources = [
    {
        title: "Meal Plans",
        plans: [
            {
                title: "Month 1",
                link: "https://drive.google.com/file/d/110l9tJLa4B2VbXrdP4TqRxQl_uG0OGnl/view?usp=sharing",
            },
            {
                title: "Month 2",
                link: "https://drive.google.com/file/d/1dwXCQLF9c65FjSXO4T0mnKBzMkq0twa8/view?usp=sharing",
            },
        ],
    },
    {
        title: "Training Plans",
        plans: [
            {
                title: "Month 1",
                link: "https://drive.google.com/file/d/1t95M5Bzk7Twmn3Km1fKGTip4U4-X-pep/view?usp=sharing",
            },
            {
                title: "Month 2",
                link: "https://drive.google.com/file/d/1C-JezKsQ0u175PJ9GR5G10MauRjV6aiR/view?usp=sharing",
            },
        ],
    },
];
export default function FreeResourcesSection() {
    return (
        <section id="free" className="py-5 px-5">
            <div className="max-w-6xl text-neutral-900 mx-auto space-y-4">
                <h1 className="font-extrabold text-3xl md:text-4xl text-center">
                    Free Resources
                </h1>
                <p className="text-neutral-500 text-center">
                    We are with you, on every step
                </p>

                <div className="space-y-4">
                    {resources.map((resource) => {
                        return (
                            <DropDown
                                key={resource.title}
                                t={resource.title}
                                plans={resource.plans}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

function DropDown({ t, plans }: { t: string; plans: Plan[] }) {
    const [open, setOpen] = useState(false);
    return (
        <div
            className="rounded-md border border-neutral-100 p-2 max-w-lg mx-auto hover:cursor-pointer"
            onClick={() => setOpen(!open)}
        >
            <p className="flex justify-between text-neutral-700 font-semibold mb-2">
                {t} <span className="text-cyan-700">{open ? "-" : "+"}</span>
            </p>
            {plans.map((plan) => {
                return (
                    <Link
                        target="_blank"
                        href={plan.link}
                        key={plan.title}
                        className={`${open ? "block" : "hidden"} transition-all druation-300 grid text-neutral-500 mb-1 hover:underline`}
                    >
                        {plan.title}
                    </Link>
                );
            })}
        </div>
    );
}
