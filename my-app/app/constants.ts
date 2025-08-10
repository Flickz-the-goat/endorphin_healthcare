export type Product = {
    slug: string;
    name: string;
    description: string;
    image: string;
    benefits: string[];
    plan_one?: string;
    plan_two?: string;
    link_one: string;
    link_two: string;
    results: Result[];
    dosing: Dose;
    side_effects: SideEffect[];
    caution: string[];
};
export type SideEffect = {
    type: string;
    chance: string;
    effects: string[];

}
export type Dose = {
    route: string; 
    start: string;
    maintainance: string[],
    injection_site: string;
}
export type Result = {
    type: string;
    list: string[];
}
export const products: Product[] = [
    {
        slug: "tirzepatide",
        name: "Tirzepatide",
        description:
            "Dual GIP/GLP-1 agonist clinically shown to accelerate medical weight loss, improve glycemic control, and support sustainable body recomposition.",
        image: "/terzep.jpg",
        benefits: [
            "Rapid, clinically proven weight loss",
            "Appetite regulation and satiety support",
            "Improved insulin sensitivity and metabolic health",
        ],
        plan_one: "28 Days",
        plan_two: "84 Days",
        link_one: "http://partners.joinasher.com/start?referralId=1741&medicationPackages=%5B%7B%22productId%22%3A%22pvt%3A%3Ad8c17df2-786f-4b56-9499-f1f85d09c06f%22%2C%22projectId%22%3A%22proj%3A%3Aaf265388-9fcb-441d-bf02-6f96444bdb27%22%2C%22name%22%3A%22Tirzepatide%22%2C%22duration%22%3A28%7D%5D&medicationType=Injection",
        link_two: "http://partners.joinasher.com/start?referralId=1741&medicationPackages=%5B%7B%22productId%22%3A%22pvt%3A%3Ad8c17df2-786f-4b56-9499-f1f85d09c06f%22%2C%22projectId%22%3A%22proj%3A%3Aaf265388-9fcb-441d-bf02-6f96444bdb27%22%2C%22name%22%3A%22Tirzepatide%22%2C%22duration%22%3A84%7D%5D&medicationType=Injection",
        results: [
            {
                type: "Weight Loss",
                list: ["15-20% total body weight in clinical trials", "Reduced visceral fat", "Improved body composition"]
            },
            {
                type: "Metabolic",
                list: ["Improved glycemic control", "Reduced HbA1c levels", "Better lipid profiles"]
            }
        ],
        dosing: {
            route: "Subcutaneous",
            start: "2.5 mg once weekly",
            maintainance: ["5 mg", "10 mg", "15 mg"],
            injection_site: "Abdomen, thigh, or upper arm"
        },
        side_effects: [
            {
                type: "Common",
                chance: ">10%",
                effects: ["Nausea", "Diarrhea", "Decreased appetite", "Vomiting"]
            },
            {
                type: "Less Common",
                chance: "5-10%",
                effects: ["Constipation", "Dyspepsia", "Fatigue", "Abdominal pain"]
            }
        ],
        caution: [
            "History of medullary thyroid carcinoma",
            "Multiple Endocrine Neoplasia syndrome type 2",
            "Pancreatitis",
            "Gallbladder disease"
        ]
    },
    {
        slug: "semaglutide",
        name: "Semaglutide",
        description:
            "GLP-1 therapy trusted for significant, sustained weight reduction and improved cardiometabolic markers.",
        image: "/sema.jpg",
        benefits: [
            "Reduced cravings and stabilized hunger",
            "Steady, sustainable fat loss",
            "Evidence-based safety and efficacy",
        ],
        plan_one: "28 Days",
        plan_two: "84 Days",
        link_one: "http://partners.joinasher.com/start?referralId=1741&medicationPackages=%5B%7B%22productId%22%3A%22pvt%3A%3A761b8328-f642-41c8-bcdf-2768007ca056%22%2C%22projectId%22%3A%22proj%3A%3Aaf265388-9fcb-441d-bf02-6f96444bdb27%22%2C%22name%22%3A%22Semaglutide%22%2C%22duration%22%3A28%7D%5D&medicationType=Injection",
        link_two: "http://partners.joinasher.com/start?referralId=1741&medicationPackages=%5B%7B%22productId%22%3A%22pvt%3A%3A761b8328-f642-41c8-bcdf-2768007ca056%22%2C%22projectId%22%3A%22proj%3A%3Aaf265388-9fcb-441d-bf02-6f96444bdb27%22%2C%22name%22%3A%22Semaglutide%22%2C%22duration%22%3A84%7D%5D&medicationType=Injection",
        results: [
            {
                type: "Weight Loss",
                list: ["Average 15% body weight loss", "Reduced waist circumference", "Decreased BMI"]
            },
            {
                type: "Cardiovascular",
                list: ["Reduced risk of major cardiovascular events", "Improved blood pressure", "Better cholesterol levels"]
            }
        ],
        dosing: {
            route: "Subcutaneous",
            start: "0.25 mg once weekly",
            maintainance: ["0.5 mg", "1.0 mg", "1.7 mg", "2.4 mg"],
            injection_site: "Abdomen, thigh, or upper arm"
        },
        side_effects: [
            {
                type: "Common",
                chance: ">10%",
                effects: ["Nausea", "Diarrhea", "Vomiting", "Constipation"]
            },
            {
                type: "Less Common",
                chance: "5-10%",
                effects: ["Headache", "Fatigue", "Dyspepsia", "Abdominal pain"]
            }
        ],
        caution: [
            "History of thyroid C-cell tumors",
            "Pancreatitis",
            "Diabetic retinopathy complications",
            "Kidney problems"
        ]
    },
    {
        slug: "nad-plus",
        name: "NAD+",
        description:
            "Cellular energy cofactor that supports mitochondrial performance, cognitive clarity, and healthy aging.",
        image: "/nad.jpg",
        benefits: [
            "Enhanced energy and focus",
            "Cellular repair and longevity support",
            "Improved recovery and resilience",
        ],
        plan_one: "90 Days",
        link_one: "http://partners.joinasher.com/start?referralId=1741&medicationPackages=%5B%7B%22productId%22%3A%22pvt%3A%3Ab0c3ea9e-7b00-41cd-b9a1-297a4fc6be3b%22%2C%22projectId%22%3A%22proj%3A%3Aaf265388-9fcb-441d-bf02-6f96444bdb27%22%2C%22name%22%3A%22NAD%2B%22%2C%22duration%22%3A90%7D%5D&medicationType=Injection",
        link_two: "",
        results: [
            {
                type: "Cognitive",
                list: ["Improved mental clarity", "Enhanced focus", "Better memory retention"]
            },
            {
                type: "Physical",
                list: ["Increased energy levels", "Faster recovery", "Improved cellular repair"]
            }
        ],
        dosing: {
            route: "IV or Subcutaneous",
            start: "100-250 mg",
            maintainance: ["250-500 mg weekly"],
            injection_site: "Arm or via IV infusion"
        },
        side_effects: [
            {
                type: "Common",
                chance: "5-10%",
                effects: ["Flushing", "Temporary nausea", "Headache"]
            },
            {
                type: "Rare",
                chance: "<1%",
                effects: ["Dizziness", "Fatigue", "Injection site reactions"]
            }
        ],
        caution: [
            "Pregnancy or breastfeeding",
            "Severe kidney disease",
            "Certain psychiatric conditions",
            "Low blood pressure"
        ]
    },
    {
        slug: "sermorelin",
        name: "Sermorelin",
        description:
            "Growth hormone secretagogue to optimize sleep, recovery, and lean body composition.",
        image: "/serm.jpg",
        benefits: [
            "Deeper sleep and recovery",
            "Lean muscle preservation",
            "Overall vitality and performance",
        ],
        plan_one: "~ 21 days Male, 35 Days Female",
        link_one: "http://partners.joinasher.com/start?referralId=1741&medicationPackages=%5B%7B%22productId%22%3A%22pvt%3A%3Aeb8164b0-3f1c-407e-b3c1-9d02c2f81268%22%2C%22projectId%22%3A%22proj%3A%3Aaf265388-9fcb-441d-bf02-6f96444bdb27%22%2C%22name%22%3A%22Sermorelin%22%2C%22duration%22%3A21%7D%5D&medicationType=Injection",
        link_two: "",
        results: [
            {
                type: "Physical",
                list: ["Increased lean muscle mass", "Reduced body fat", "Improved exercise recovery"]
            },
            {
                type: "Wellness",
                list: ["Better sleep quality", "Increased energy", "Improved skin elasticity"]
            }
        ],
        dosing: {
            route: "Subcutaneous",
            start: "200-300 mcg daily",
            maintainance: ["300-500 mcg daily"],
            injection_site: "Abdomen or thigh"
        },
        side_effects: [
            {
                type: "Common",
                chance: "5-10%",
                effects: ["Injection site reactions", "Headache", "Flushing"]
            },
            {
                type: "Rare",
                chance: "<1%",
                effects: ["Joint pain", "Dizziness", "Nausea"]
            }
        ],
        caution: [
            "Active cancer",
            "Pregnancy",
            "Severe obesity",
            "Diabetes with complications"
        ]
    },
    {
        slug: "glutathione",
        name: "Glutathione",
        description:
            "Master antioxidant for detoxification, immune support, and radiant skin health.",
        image: "/gluta.jpg",
        benefits: [
            "Detox and immune support",
            "Brighter, clearer skin",
            "Cellular antioxidant protection",
        ],
        plan_one: "90 Days",
        link_one: "http://partners.joinasher.com/start?referralId=1741&medicationPackages=%5B%7B%22productId%22%3A%22pvt%3A%3A9a89d758-30a4-4e82-9f21-0e6b7d6d4101%22%2C%22projectId%22%3A%22proj%3A%3Aaf265388-9fcb-441d-bf02-6f96444bdb27%22%2C%22name%22%3A%22Glutathione%22%2C%22duration%22%3A90%7D%5D&medicationType=Injection",
        link_two: "",
        results: [
            {
                type: "Skin",
                list: ["Brighter complexion", "Reduced hyperpigmentation", "Improved skin elasticity"]
            },
            {
                type: "Health",
                list: ["Enhanced detoxification", "Reduced oxidative stress", "Improved immune function"]
            }
        ],
        dosing: {
            route: "IV or Subcutaneous",
            start: "600-1200 mg",
            maintainance: ["1200-2400 mg weekly"],
            injection_site: "Arm or via IV infusion"
        },
        side_effects: [
            {
                type: "Common",
                chance: "5-10%",
                effects: ["Temporary nausea", "Headache", "Flushing"]
            },
            {
                type: "Rare",
                chance: "<1%",
                effects: ["Allergic reactions", "Low zinc levels", "Injection site irritation"]
            }
        ],
        caution: [
            "Asthma (may trigger bronchoconstriction)",
            "Certain genetic disorders",
            "Severe liver disease",
            "Allergy to glutathione components"
        ]
    },
];;
