"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Check } from "lucide-react";

type PricingTier = {
    name: string;
    headerColor: string;
    price: string;
    priceNote?: string;
    savings?: string;
    description: string;
    tagline: string;
    features: string[];
    buttonText: string;
    buttonLink?: string;
};

export function PricingSection() {
    const [billingPeriod, setBillingPeriod] = useState("annually");
    const [hostingType, setHostingType] = useState("self-host");

    const pricingTiers: PricingTier[] = [
        {
            name: "Free",
            headerColor: "bg-gray-100",
            price: "$0",
            priceNote: "No credit card required",
            description: "per standard user*",
            tagline: "For developers and early exploration",
            features: [
                "2 million page views",
                "Limited projects, tests, and goals",
                "Unlimited team members",
                "No-code visual and code editor",
                "A/B testing & Split URL testing",
                "Pivot AI Helper",
                "AI-assisted goal verification & content suggestions",
                "Cross-domain testing",
                "Share interactive reports",
            ],
            buttonText: "Build for free",
        },
        {
            name: "Team",
            headerColor: "bg-pink-100",
            price: "$20",
            priceNote: "Billed Annually",
            savings: "20% SAVINGS",
            description: "per standard user*",
            tagline: "For growing, collaborative teams",
            features: [
                "Everything in Free, plus...",
                "5 million page views",
                "Unlimited projects, tests, and goals",
                "Sequential testing",
            ],
            buttonText: "Choose team",
        },
        {
            name: "Business",
            headerColor: "bg-green-100",
            price: "$199",
            priceNote: "Billed Annually",
            savings: "20% SAVINGS",
            description: "per standard user*",
            tagline: "For teams who need more control",
            features: [
                "Everything in Team, plus...",
                "5 million page views",
                "Rich permission controls",
                "Priority support",
                "No-code deployment",
                "Full 3rd-party integrations",
                "Campaign scheduling",
                "Custom Branding",
            ],
            buttonText: "Choose business",
        },
        {
            name: "Enterprise",
            headerColor: "bg-purple-100",
            price: "Request a Quote →",
            description: "Flexible pricing that scales with your business",
            tagline: "For teams & orgs operating at scale",
            features: [
                "Everything in Business, plus...",
                "50 Million+ page views",
                "Customized solutions",
                "Integrations support",
                "Priority support",
                "Dedicated CRO Consultant",
                "Dedicated CSM",
                "Live Chat Support",
                "Service Level Agreement (SLA)",
            ],
            buttonText: "Get Pricing",
        },
    ];

    return (
        <section className="w-full px-8 py-24 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-16">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
                            Pivot Pricing
                        </h2>
                        <p className="text-lg text-muted-foreground">Find the plan that works for you</p>
                    </div>

                    {/* Toggle Switches */}
                    <div className="flex flex-col gap-4 mt-8 md:mt-0">
                        <ToggleGroup
                            type="single"
                            value={billingPeriod}
                            onValueChange={(value) => value && setBillingPeriod(value)}
                            variant="outline"
                            className="w-fit"
                        >
                            <ToggleGroupItem value="monthly" aria-label="Monthly">
                                Monthly
                            </ToggleGroupItem>
                            <ToggleGroupItem value="annually" aria-label="Annually">
                                Annually
                            </ToggleGroupItem>
                        </ToggleGroup>

                        <ToggleGroup
                            type="single"
                            value={hostingType}
                            onValueChange={(value) => value && setHostingType(value)}
                            variant="outline"
                            className="w-fit"
                        >
                            <ToggleGroupItem value="cloud" aria-label="Cloud">
                                Cloud
                            </ToggleGroupItem>
                            <ToggleGroupItem value="self-host" aria-label="Self Host">
                                Self Host
                            </ToggleGroupItem>
                        </ToggleGroup>
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-border overflow-hidden">
                    {pricingTiers.map((tier, index) => (
                        <div
                            key={index}
                            className="flex flex-col bg-white border-r border-border last:border-r-0"
                        >
                            {/* Header */}
                            <div className={`${tier.headerColor} px-6 py-4`}>
                                <h3 className="text-2xl font-bold text-foreground">{tier.name}</h3>
                            </div>

                            {/* Content */}
                            <div className="flex-1 flex flex-col px-6 py-6 min-h-[600px]">
                                {/* Pricing */}
                                <div className="mb-4 min-h-[100px]">
                                    {tier.savings && (
                                        <p className="text-xs font-semibold text-green-600 mb-2">
                                            {tier.savings}
                                        </p>
                                    )}
                                    <div className="flex items-baseline gap-2 mb-1">
                                        <span className="text-3xl font-bold text-foreground">
                                            {tier.price}
                                        </span>
                                        {tier.price !== "Request a Quote →" && (
                                            <span className="text-muted-foreground">
                                                / month
                                            </span>
                                        )}
                                    </div>
                                    {tier.priceNote && (
                                        <p className="text-sm text-muted-foreground mb-2">
                                            {tier.priceNote}
                                        </p>
                                    )}
                                    <p className="text-sm text-muted-foreground">{tier.description}</p>
                                </div>

                                {/* Tagline */}
                                <p className="text-sm text-muted-foreground mb-6 min-h-[40px]">{tier.tagline}</p>

                                {/* Features */}
                                <ul className="flex-1 space-y-1.5 mb-8">
                                    {tier.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-start gap-3">
                                            <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                                            <span className="text-sm text-foreground">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA Button */}
                                <div className="mt-auto">
                                    <Button
                                        className="w-full bg-gray-900 text-white hover:bg-gray-800"
                                        size="lg"
                                    >
                                        {tier.buttonText}
                                    </Button>

                                    {tier.name === "Enterprise" && (
                                        <Button
                                            variant="outline"
                                            className="w-full mt-2"
                                            size="sm"
                                        >
                                            VOLUME DISCOUNTS
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
