import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export function ContactSection() {
    return (
        <section className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto bg-muted rounded-lg p-8 sm:p-12 lg:p-16">
                {/* Title */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-center text-foreground mb-6 sm:mb-8">
                    Pivot
                </h2>

                {/* Tagline */}
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-sans font-light text-center text-foreground mb-10 sm:mb-12 lg:mb-16 leading-tight">
                    Your conversions should scale, not stall. Let's talk.
                </p>

                {/* Cards Container */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    {/* Left Card - Chat with sales */}
                    <Card className="bg-white hover:shadow-md transition-shadow cursor-pointer">
                        <CardHeader>
                            <CardTitle className="text-xl sm:text-2xl font-sans text-foreground mb-2">
                                Chat with sales
                            </CardTitle>
                            <CardDescription className="text-base sm:text-lg text-foreground/80 font-sans">
                                Learn how Pivot can help you increase conversions.
                            </CardDescription>
                        </CardHeader>
                    </Card>

                    {/* Right Card - Partner with Pivot */}
                    <Card className="bg-white hover:shadow-md transition-shadow cursor-pointer">
                        <CardHeader>
                            <CardTitle className="text-xl sm:text-2xl font-sans text-foreground mb-2">
                                Partner with Pivot
                            </CardTitle>
                            <CardDescription className="text-base sm:text-lg text-foreground/80 font-sans">
                                Join Pivot's growing partner network and bring powerful A/B testing and optimization capabilities to your clients.
                            </CardDescription>
                        </CardHeader>
                    </Card>
                </div>
            </div>
        </section>
    );
}

