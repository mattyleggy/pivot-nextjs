export function ProblemSolutionSection() {
    return (
        <section className="w-full px-8 py-16 bg-white">
            <div className="max-w-4xl mx-auto text-center">
                {/* Headline */}
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
                    The problem: <em className="italic font-normal">scattered insight</em>, <em className="italic font-normal">slower growth</em>.
                </h2>

                {/* Problem Description */}
                <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed">
                    Teams today juggle half a dozen tools just to understand what's working — <strong className="font-semibold">A/B testing</strong> in one tab, <strong className="font-semibold">analytics</strong> in another, and <strong className="font-semibold">replays</strong> buried somewhere else. It's disjointed, slow, and costly.
                </p>

                {/* Solution Description */}
                <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
                    Pivot brings them together — <strong className="font-semibold">experiments</strong>, <strong className="font-semibold">analytics</strong>, and <strong className="font-semibold">session replays</strong> — in one clean interface that shows you what's working, why, and what to do next
                </p>
            </div>
        </section>
    );
}

