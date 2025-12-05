import Image from "next/image";
export function FeaturesSection() {
    const features = [
        {
            title: "Launch tests easy as!",
            image: "/images/no-code/no-code-1.png",
            description: "Launch your first test in seconds, no developer required",
        },
        {
            title: "Unified Learning Loop",
            image: "/images/no-code/no-code-2.png",
            description: "See every experiment, metric, and user session in one place",
        },
        {
            title: "Hosted Locally",
            image: "/images/no-code/no-code-3.png",
            description: "Proudly built in Australia & local data ready.",
        },
        {
            title: "AI-Assisted Experimentation",
            image: "/images/no-code/no-code-4.png",
            description: "Powered by AI, trained on real growth data.",
        },
    ];

    return (
        <section id="platform" className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 mx-auto">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="flex flex-col bg-muted p-4 sm:p-6 lg:p-8"
                    >
                        <h3 className="text-sm font-bold text-foreground mb-3 sm:mb-4">
                            {feature.title}
                        </h3>
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                            {feature.description}
                        </p>
                        <Image
                            src={feature.image}
                            alt={feature.title}
                            width={400}
                            height={400}
                            className=""
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
