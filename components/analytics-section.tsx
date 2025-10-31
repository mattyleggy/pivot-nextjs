import { SideBySideSection } from "@/components/side-by-side-section";

export function AnalyticsSection() {
    return (
        <SideBySideSection
            reverse
            eyebrow="Know what converts and why"
            title="Product Analytics"
            description={
                "Track every experiment, conversion path, and engagement metric from a single dashboard. Pivot’s AI-powered analytics reveal the why behind the data — giving you clear, actionable insights to boost performance and customer experience."
            }
            features={[
                {
                    title: "Conversion-Focused Analytics",
                    description:
                        "Measure KPIs that actually matter — revenue lift, engagement time, and activation rates — with visual dashboards that tell the full story.",
                },
                {
                    title: "AI Insight Summaries",
                    description:
                        "Skip the spreadsheets. Pivot’s AI translates complex data into natural language summaries, highlighting what’s working and what’s holding you back.",
                },
            ]}
            backgroundImageSrc="/images/hero/hero-home.png"
            overlayImageSrc="/images/pivot-browser-2.png"
        />
    );
}


