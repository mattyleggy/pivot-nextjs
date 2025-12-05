import Image from "next/image";

export function HeroSection() {
    return (
        <section className="w-full px-4 sm:px-6 lg:px-8 pt-0 pb-4 sm:pb-8">
            <div className="relative w-full mx-auto max-h-[1200px]">
                {/* Hero Container with Background */}
                <div className="relative w-full min-h-[500px] sm:min-h-[600px] flex flex-col items-center justify-center rounded-2xl sm:rounded-3xl">
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0 w-full h-full overflow-hidden rounded-2xl sm:rounded-3xl">
                        <Image
                            src="/images/hero/hero-home-bg.png"
                            alt="Hero background"
                            fill
                            className="object-cover w-full h-full"
                            priority
                            sizes="100vw"
                        />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
                        {/* Waitlist Badge */}
                        <p className="text-xs sm:text-sm text-white drop-shadow-sm mb-3">
                            The A/B testing platform you&apos;ve been waiting for.
                        </p>

                        {/* Main Headline */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white drop-shadow-sm leading-tight mb-4 sm:mb-5">
                            Turn <span className="italic bold">visitors</span> into <span className="italic bold">customers</span>.                           
                        </h1>

                        <p className="text-base sm:text-lg md:text-xl text-white drop-shadow-sm mb-4 sm:mb-5">Run web experiments, A/B tests, uncover insights, and grow with confidence.</p>

                        {/* Statistics */}
                        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8 text-xs sm:text-sm text-white drop-shadow-sm">
                            <span>Enterprise, Startups, Agencies</span>                            
                            <span>~25ms avg load</span>
                            <span>5 min setup time</span>
                            <span>See conversion lift</span>
                        </div>
                    </div>

                    {/* Browser UI Element - Positioned below hero, substantially overlapping */}
                    <div className="w-full flex justify-center z-20 pb-8 sm:pb-12 lg:pb-16 min-h-[300px] sm:min-h-[400px]">
                        <div className="absolute z-50 w-full max-w-5xl mx-auto px-4 sm:px-0">
                            <Image
                                src="/images/hero/hero-home-img2.png"
                                alt="Pivot AI Browser Interface"
                                width={1200}
                                height={800}
                                className="w-full h-auto"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
