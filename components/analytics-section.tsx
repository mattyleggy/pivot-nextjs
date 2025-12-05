import { SideBySideSection } from "@/components/side-by-side-section";

export function AnalyticsSection() {
    return (
        <SideBySideSection
            reverse
            eyebrow="Know what converts and why"
            title="Product Analytics"
            description={
                "Track every experiment, conversion path, and engagement metric from a single dashboard. Pivot's AI-powered analytics reveal the why behind the data — giving you clear, actionable insights to boost performance and customer experience."
            }
            features={[
                {
                    title: "Unified Dashboard",
                    description:
                        "Track every experiment, conversion path, and engagement metric from a single dashboard — no more switching between tools or missing critical connections.",
                },
                {
                    title: "AI-Powered Insights",
                    description:
                        "Pivot's AI reveals the why behind the data, giving you clear, actionable insights to boost performance and customer experience.",
                },
            ]}
            backgroundImageSrc="/images/usp-2a.png"
            overlayImageSrc="/images/pivot-browser-2.png"
        />
    );
}
