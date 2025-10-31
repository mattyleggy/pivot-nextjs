export function FeaturesSection() {
    const features = [
        {
            title: "Unified Learning Loop",
            description:
                "See every experiment, metric, and user session in one place. No tab-hopping or manual report stitching.",
        },
        {
            title: "Hosted locally in Australia & New Zealand",
            description: "Proudly built for ANZ teams — GDPR & local data ready",
        },
        {
            title: "AI-Assisted Experimentation",
            description:
                "Generate test ideas, predict outcomes, and get actionable insights powered by AI trained on real growth data.",
        },
        {
            title: "Fast, Code-Free Setup",
            description:
                "Launch your first test in minutes — no developer required. Perfect for product teams, marketers, and agencies alike.",
        },
    ];

    return (
        <section className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 max-w-7xl mx-auto">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 bg-muted rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8">
                {features.map((feature, index) => (
                    <div key={index} className="flex-1">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                            {feature.title}
                        </h3>
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
