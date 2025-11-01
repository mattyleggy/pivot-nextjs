import { SideBySideSection } from "@/components/side-by-side-section";

export function AiReportingSection() {
    return (
        <SideBySideSection
            eyebrow="On the fly UX feedback"
            title="AI reporting"
            description={
                "Instantly find out whats bad about the page. Automatic experimentation insights to your email, weekly."
            }
            features={[
                {
                    title: "Visual Behavior Insights",
                    description:
                        "Replay user journeys with heatmaps and scroll tracking to understand what drives engagement — and what causes drop-offs.",
                },
                {
                    title: "Actionable Fixes",
                    description:
                        "Link session data directly to experiments. Spot issues, create new hypotheses, and launch tests instantly — all in one platform.",
                },
            ]}
            backgroundImageSrc="/images/usp-3.png"
            overlayImageSrc="/images/pivot-browser-2.png"
        />
    );
}


