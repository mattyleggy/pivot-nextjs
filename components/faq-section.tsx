"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqSection() {
    const faqs = [
        {
            question: "Why Pivot over VWO?",
            answer:
                "Pivot offers a more modern, AI-powered approach to experimentation with faster setup, automated insights, and a more intuitive interface. Unlike VWO's complex enterprise features, Pivot focuses on simplicity without sacrificing power, making it accessible for teams of all sizes.",
        },
        {
            question: "Why Pivot over Optimizely?",
            answer:
                "Pivot eliminates the technical overhead and lengthy implementation times associated with Optimizely. Our platform delivers faster results with AI-driven analysis, real-time reporting, and a streamlined workflow that gets your experiments running in minutes, not weeks.",
        },
        {
            question: "Who is Pivot for?",
            answer:
                "Pivot is designed for teams of every size - from startups validating their first ideas to enterprise teams running full-scale experimentation programs. Whether you're a marketer, product manager, or developer, Pivot provides the tools you need to make data-driven decisions.",
        },
        {
            question: "Is Pivot free?",
            answer:
                "Pivot offers a free tier to get you started with basic experimentation features. As your needs grow, we offer flexible pricing plans that scale with your business. Contact us to learn more about our pricing options.",
        },
        {
            question: "How accurate is Pivot?",
            answer:
                "Pivot uses industry-standard statistical methods and advanced AI algorithms to ensure highly accurate results. Our platform employs rigorous statistical testing to provide reliable insights you can trust for making critical business decisions.",
        },
        {
            question: "What languages and browsers are supported?",
            answer:
                "Pivot works seamlessly across all major browsers including Chrome, Firefox, Safari, and Edge. Our platform supports multiple languages and can be easily integrated into websites using any web technology stack.",
        },
        {
            question: "Can I talk to customer support?",
            answer:
                "Yes! We offer comprehensive customer support through multiple channels including email, live chat, and scheduled consultations. Our team is committed to helping you succeed with Pivot, and we respond promptly to all inquiries.",
        },
        {
            question: "How quickly can we see results?",
            answer:
                "With Pivot, you can set up your first experiment in minutes. Once live, you'll start seeing real-time data and insights. Statistical significance typically takes a few days to weeks depending on your traffic volume, and our AI-powered reporting helps you understand results faster than traditional tools.",
        },
    ];

    return (
        <section className="w-full px-8 py-16 bg-white">
            <div className="max-w-2xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
                    Frequently asked questions
                </h2>

                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-left text-lg font-medium">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground text-base">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}

