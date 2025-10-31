import Image from "next/image";

type FeatureItem = {
    title: string;
    description: string;
};

type SideBySideSectionProps = {
    eyebrow: string;
    title: string;
    description: string;
    features: FeatureItem[];
    backgroundImageSrc: string;
    overlayImageSrc: string;
    reverse?: boolean;
};

export function SideBySideSection(props: SideBySideSectionProps) {
    const {
        eyebrow,
        title,
        description,
        features,
        backgroundImageSrc,
        overlayImageSrc,
        reverse = false,
    } = props;

    return (
        <section className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
            <div
                className={`max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start ${
                    reverse ? "lg:[&>div:first-child]:order-2 lg:[&>div:last-child]:order-1" : ""
                }`}
            >
                {/* Copy */}
                <div className="max-w-2xl flex flex-col h-full">
                    <p className="text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3">{eyebrow}</p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-4 sm:mb-6">{title}</h2>
                    <p className="text-sm sm:text-base md:text-lg text-foreground/80 leading-relaxed mb-6 sm:mb-8 lg:mb-10">{description}</p>

                    {/* Feature blurbs */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 pt-4 sm:pt-6 border-t border-border/60 mt-6 sm:mt-8 lg:mt-10 xl:mt-auto">
                        {features.map((feature, index) => (
                            <div key={index}>
                                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Visual */}
                <div className="relative w-full">
                    <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden aspect-square">
                        <Image
                            src={backgroundImageSrc}
                            alt="section background"
                            fill
                            sizes="(min-width: 1024px) 640px, 100vw"
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 flex items-center justify-center p-3 sm:p-4 lg:p-6">
                            <Image
                                src={overlayImageSrc}
                                alt="section illustration"
                                width={1200}
                                height={800}
                                className="w-full h-auto rounded-lg sm:rounded-xl shadow-2xl max-w-[92%]"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


