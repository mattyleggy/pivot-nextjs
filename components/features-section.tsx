export function FeaturesSection() {
    const features = [
        {
            title: "Unified Learning Loop",
            description:
                "See every experiment, metric, and user session in one place",
        },
        {
            title: "Hosted Locally",
            description: "Proudly built in Australia GDPR & local data ready.",
        },
        {
            title: "AI-Assisted Experimentation",
            description:
                "Powered by AI trained on real growth data.",
        },
        {
            title: "Fast, Code-Free Setup",
            description:
                "Launch your first test in minutes — no developer required",
        },
    ];

    return (
        <section className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 mx-auto">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {features.map((feature, index) => (
                    <div key={index} className="flex flex-col bg-muted rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                            {feature.title}
                        </h3>
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                            {feature.description}
                        </p>
                        <div className="relative w-full aspect-video bg-background rounded-lg overflow-hidden flex items-center justify-center">
                            <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                                <span className="text-muted-foreground text-sm">Placeholder Image</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
