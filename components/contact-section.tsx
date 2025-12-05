import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const cards = [
    {
        title: "Chat with sales",
        description: "Learn how Pivot can help you increase conversions.",
    },
    {
        title: "Partner with Pivot",
        description: "Join Pivot's growing partner network and bring powerful A/B testing and optimization capabilities to your clients.",
    },
];

export function ContactSection() {
    return (
        <section className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto bg-[#F2F1ED] p-8 sm:p-12 lg:p-16">
                {/* Title */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-center text-foreground mb-6 sm:mb-8">
                    Pivot
                </h2>

                {/* Tagline */}
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-sans font-light text-center text-foreground mb-10 leading-tight">
                    Your conversions should scale, not stall. Let's talk.
                </p>

                {/* Cards Container */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    {
                        cards.map((card, index) => (
                            <Card key={index} className="bg-white hover:shadow-md transition-shadow cursor-pointer shadow-none border-0 rounded-none">
                                <CardHeader>
                                    <CardTitle className="text-xl sm:text-2xl font-sans text-foreground mb-2">{card.title}</CardTitle>
                                    <CardDescription className="text-base sm:text-lg text-foreground/80 font-sans">{card.description}</CardDescription>
                                </CardHeader>
                            </Card>
                        ))
                   }                   
                </div>
            </div>
        </section>
    );
}

