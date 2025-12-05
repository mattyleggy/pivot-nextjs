import { SideBySideSection } from "@/components/side-by-side-section";

export function AiReportingSection() {
    return (
        <SideBySideSection
            eyebrow="On the fly AI suggestions to your inbox"
            title="AI suggestions"
            description={
                "Get weekly, data-backed ideas from our A/B testing AI delivered straight to your inbox. Each suggestion highlights what to test, why it matters, and the potential impact, so you can keep improving conversions without spending hours in dashboards."
            }
            features={[
                {
                    title: "Data-Backed Ideas",
                    description:
                        "Each weekly suggestion is powered by your actual experiment data and analytics, ensuring every recommendation is relevant to your specific performance and goals.",
                },
                {
                    title: "Clear Impact Guidance",
                    description:
                        "Every suggestion explains what to test, why it matters, and the potential impact — so you can prioritize the experiments that will drive the biggest improvements.",
                },
            ]}
            backgroundImageSrc="/images/usp-3a.png"
            overlayImageSrc="/images/usp-3a-image.png"
        />
    );
}


