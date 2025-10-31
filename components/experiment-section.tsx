import { SideBySideSection } from "@/components/side-by-side-section";

export function ExperimentSection() {
    return (
        <SideBySideSection
            eyebrow="Smarter testing starts here"
            title="Experiementation"
            description={
                "Design, launch, and measure experiments across your website or product — without code or complexity. Pivot helps you test ideas faster, uncover what truly moves the needle, and scale winning variations automatically."
            }
            features={[
                {
                    title: "Validate Ideas Faster",
                    description:
                        "Quickly spin up A/B or multivariate tests with AI-generated variations. Eliminate guesswork and learn what works before scaling across your site.",
                },
                {
                    title: "Automate What Works",
                    description:
                        "When a variant wins, Pivot can roll it out automatically — so your team focuses on strategy, not manual rollouts and reports.",
                },
            ]}
            backgroundImageSrc="/images/hero/hero-home.png"
            overlayImageSrc="/images/pivot-browser-2.png"
        />
    );
}

