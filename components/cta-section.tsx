import { Button } from "@/components/ui/button";

export function CtaSection() {
    return (
        <section className="w-full px-8 py-16 bg-white">
            <div className="max-w-4xl mx-auto text-center">
                {/* Headline */}
                <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
                    Turn insights into impact.
                </h2>

                {/* Description */}
                <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
                    Pivot helps modern teams run smarter experiments, uncover behavioral insights, and grow with clarity — all in one unified platform.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button variant="ghost" size="lg" className="text-foreground">
                        Talk to sales
                    </Button>
                    <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90">
                        Join waitlist
                    </Button>
                </div>
            </div>
        </section>
    );
}

