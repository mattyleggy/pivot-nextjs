export function WhoPivotIsForSection() {
    const audiences = [
        {
            title: "Enterprise",
            description:
                "Empower large teams with AI-driven insights and scalable experimentation workflows.",
        },
        {
            title: "Start ups",
            description:
                "Validate ideas fast and optimize growth with lightweight, automated testing tools.",
        },
        {
            title: "Agencies",
            description:
                "Manage multiple clients, streamline reporting, and showcase measurable results.",
        },
    ];

    return (
        <section className="w-full px-8 py-16 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Main Heading */}
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
                    Who Pivot is for?
                </h2>

                {/* Subtitle */}
                <p className="text-lg md:text-xl text-foreground/80 mb-12 text-center max-w-3xl mx-auto">
                    Built for teams of every size — from first test to full-scale experimentation.
                </p>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {audiences.map((audience, index) => (
                        <div
                            key={index}
                            className="bg-muted p-8 rounded-lg"
                        >
                            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                {audience.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {audience.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

